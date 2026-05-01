import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logIng from "../server/logIn";
import { useAuth } from "../context/AuthContext";
import { logInSchema } from "../schemas/logIn.schema"

import type { LogInresponse } from "../types/login.type";

export function useLogin() {
    const navigate = useNavigate();
    const { setUser } = useAuth();



    type ErrState = {
        email: string | undefined,
        password: string | undefined
    };


    const [error, setError] = useState<ErrState | undefined>(undefined);

    const handleError = (res: LogInresponse | undefined) => {

        const email = res?.typeError == "email" ? res.message : undefined
        const password = res?.typeError == "password" ? res.message : undefined

        setError({ email, password });
    }

    const login = async (email: string, password: string) => {

        try {
            /* validation input */
            const validation = logInSchema.safeParse({ email, password })
            const errors = validation.error?.format();
            if (!validation.success) {
                setError({ email: errors?.email?._errors[0], password: errors?.password?._errors[0] })
                return
            }

            const res = await logIng(email, password);

            /* validation db */
            if (!res?.success) {
                handleError(res);
                return;
            }

            if (res.AccessToken && res.RefreshToken && res.user) {
                setUser({
                    AccessToken: res.AccessToken,
                    RefreshToken: res.RefreshToken,
                    user: res.user,
                })
            }


            navigate("/dashboard");
            return;


        } catch (err: any) {
            console.error("NETWORK ERROR", err);

        }


    }

    return { login, error }
};

