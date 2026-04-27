import { pool } from "./connection.js"
import type { Clien_Data } from "../types/bd_types.js"

export default async function singUp_db(name: string, email: string, password: string): Promise<void> {
    const res = await pool.query(
        `INSERT INTO client (name,email,password) VALUES ($1,$2,$3)`,
        [name, email, password]
    );
}