import { isRefreshTokenExist, update_RefreshToken } from "../db/client/refreshToken.js"
import { AppError } from "../error/AppError.js"
import { createRefreshToken, createAccessToken } from "../utility/token.js"


export default async function refreshService(clientID: number, email: string, refreshToken: string) {
    try {

        const data = await isRefreshTokenExist(clientID)

        if (data.token !== refreshToken) {
            throw new AppError('invalid refresh token', 'refreshTOken', 401)
        }

        const newRefreshToken = createRefreshToken();
        const newAccessToken = createAccessToken(clientID, email);
        update_RefreshToken(newRefreshToken, clientID)


        return {
            RefreshToken: newRefreshToken, data: { AccessToken: newAccessToken }

        }


    } catch (err: any) {
        throw err
    }

}