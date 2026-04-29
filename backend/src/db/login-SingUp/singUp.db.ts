import { pool } from "../connection.js"


export default async function singUp_db(name: string, email: string, password: string): Promise<void> {
    const res = await pool.query(
        `INSERT INTO client (name,email,password) VALUES ($1,$2,$3)`,
        [name, email, password]
    );
}