import { pool } from "../connection.js"

export default async function insert_RefreshToken(token: string, clienID: number): Promise<void> {
    const res = await pool.query(
        `INSERT INTO refreshtoken (token,client_id) VALUES ($1,$2) RETURNING *`,
        [token, clienID]
    );
}