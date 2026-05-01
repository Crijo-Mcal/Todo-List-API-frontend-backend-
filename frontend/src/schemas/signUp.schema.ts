import { z } from "zod";

export const signUpSchema = z.object({
    name: z.string().min(1, "Required Name"),
    email: z.string().min(1, "Required email").email("invalit email format"),
    password: z.string().min(1, "Required password").min(6, "Password must be at least 6 characters")
});

export type SignUpInput = z.infer<typeof signUpSchema>;