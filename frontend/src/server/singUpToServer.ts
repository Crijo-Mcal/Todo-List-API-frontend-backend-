
const baseUrl = "http://localhost:3000";
import type { LogInresponse } from "../types/login.type";

export default async function logIng(email: string, password: string): Promise<LogInresponse | undefined> {

    try {

        const res = await fetch(`${baseUrl}/login`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if (!res.ok) {
            throw new Error("login filet")
        }

        const data: LogInresponse = await res.json();

        return data;
    } catch (err: any) {
        console.log(err.message);

    }

}