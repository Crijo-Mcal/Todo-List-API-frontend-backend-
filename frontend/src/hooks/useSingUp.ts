import { useState } from "react";
import { signUpSchema } from "../schemas/signUp.schema"

interface ErrState {
    name: string | undefined,
    email: string | undefined,
    password: string | undefined
}


export function useSingUp() {
    const [err, setErr] = useState<ErrState | null>(null)

    const resister = (name: string, email: string, password: string) => {

        const validation = signUpSchema.safeParse({ name, email, password });

        if (!validation.success) {

            const erros = validation.error.format()

            setErr({
                name: erros.name?._errors[0],
                email: erros.email?._errors[0],
                password: erros.password?._errors[0]
            })

        }



    }

    return { err, resister }
}