import { z } from "zod";


export const logInSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password required")
})

