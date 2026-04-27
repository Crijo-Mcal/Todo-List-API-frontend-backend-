import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.TOKEN_SECRET_KEY;

export function createAccessToken(id: number, email: string): string {
    if (!secretKey) {
        throw new Error("TOKEN_SECRET_KEY is not defined in .env");
    }

    const token = jwt.sign(
        { id, email },
        secretKey,
        { expiresIn: "15m" }
    );

    return token;
}

export function createRefreshToken(id: number, email: string): string {
    if (!secretKey) {
        throw new Error("TOKEN_SECRET_KEY is not defined in .env");
    }

    const token = jwt.sign(
        { id, email },
        secretKey,
        { expiresIn: "24h" }
    );

    return token;
}