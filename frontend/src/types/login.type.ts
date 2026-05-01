export interface User {
    id: number,
    name: string,
    email: string
}

export interface LogInresponse {
    success: boolean,
    typeError?: "email" | "password",
    message?: string,
    AccessToken?: string,
    RefreshToken?: string
    user?: User
}


