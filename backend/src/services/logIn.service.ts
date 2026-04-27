import auth from "../db/auth_db.js";
import type { Clien_Data } from "../types/bd_types.js";


export default async function singUpService(email: string, password: string): Promise<Clien_Data> {

    try {
        const data = auth(email, password)
        return data
    } catch (err: any) {
        console.error(err.message);
        throw err;
    }

}