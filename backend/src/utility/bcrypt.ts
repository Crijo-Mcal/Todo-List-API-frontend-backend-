import bcrypt from "bcrypt";
const saltRounds = 10;

export async function hash(value: string) {
    const hash = await bcrypt.hash(value, saltRounds);
    return hash;
}

export async function compareHashPassword(password1: string, password2: string) {
    const hash = await bcrypt.compare(password1, password2);
    return hash;
}
