import { pool } from "./connection.js"
import { compareHashPassword } from "../utility/bcrypt.js";

import type { Clien_Data } from "../types/bd_types.js";

export default async function auth(email: string, password: string): Promise<Clien_Data> {

    const res = await pool.query("SELECT * FROM client WHERE email = $1", [email])
    const data: Clien_Data | undefined = res.rows[0];

    if (!data) {
        throw { status: 409, message: "email not exist" }
    }

    const isPasswordMatch = await compareHashPassword(password, data.password);

    if (!isPasswordMatch) {
        throw { status: 409, message: "password not correct" }
    }

    return data;

}