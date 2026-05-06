import { pool } from "./connection.js";

export interface tasksDatatype {
    id: string;
    title: string;
    completed: boolean;
};

export async function addTask(clinet_id: number, title: string) {
    const data = await pool.query('INSERT INTO task (description, status, client_id),VALUE($1,todo,$3) RETURNING*',
        [title, clinet_id]
    )
    return data;
}

export async function selectAllTask(clinet_id: number,): Promise<tasksDatatype[]> {
    const res = await pool.query('SELECT * FROM task WHERE client_id=$1', [clinet_id])
    const data = res.rows
    return data;
}



