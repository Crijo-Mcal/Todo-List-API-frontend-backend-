import auth from "../db/auth_db.js";

import { createAccessToken, createRefreshToken } from "../utility/jwtToken.js";
import insert_RefreshToken from "../db/insert/insert_RefreshToken.js";

export default async function singUpService(email: string, password: string): Promise<object> {

    try {
        const client = await auth(email, password)
        const AccessToken = createAccessToken(client.id, client.email);
        const RefreshToken = createRefreshToken(client.id, client.email);
        insert_RefreshToken(RefreshToken, client.id);
        return { AccessToken, RefreshToken, user: { id: client.id, name: client.name, email: client.email } }
    } catch (err: any) {
        throw err;
    }

}