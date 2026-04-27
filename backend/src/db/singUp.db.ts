import { pool } from "./connection.js"
import type { Clien_Data } from "../types/bd_types.js"

export default async function singUp_db(email: string, password: string): Promise<Clien_Data> {

    const res = await pool.query(
        `INSERT INTO client (email,password) VALUES ($1,$2) RETURNING *`,
        [email, password]
    );

    const data: Clien_Data = res.rows[0];

    return data;

}