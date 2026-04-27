import singUp_db from "../db/singUp.db.js"
import { hash } from "../utility/bcrypt.js";
import { AppError } from "../utility/AppError.js";

export default async function sigUpService(name: string, email: string, password: string) {

    try {
        const hash_password = await hash(password);
        await singUp_db(name, email, hash_password)
        return
    } catch (err: any) {

        if (err.code === '23505') {
            throw new AppError("email already used", 409)
        }
        throw err
    }
}