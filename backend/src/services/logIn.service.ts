import logIn from "../db/login-SingUp/logIn.js";

import { createAccessToken, createRefreshToken } from "../utility/jwtToken.js";
import { insert_RefreshToken, update_RefreshToken, isRefreshTokenExist } from "../db/login-SingUp/insert_RefreshToken.js";

export default async function singUpService(email: string, password: string): Promise<object> {

    try {
        const client = await logIn(email, password)
        const AccessToken = createAccessToken(client.id, client.email);
        const RefreshToken = createRefreshToken();

        const istokenExistInDb = await isRefreshTokenExist(client.id)

        if (istokenExistInDb) {
            update_RefreshToken(RefreshToken, client.id)
        } else {
            insert_RefreshToken(RefreshToken, client.id);
        }


        return { AccessToken, RefreshToken, user: { id: client.id, name: client.name, email: client.email } }
    } catch (err: any) {
        throw err;
    }

}