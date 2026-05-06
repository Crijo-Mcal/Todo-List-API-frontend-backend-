import { checkAccessToken } from '../utility/token.js'
import { AppError } from '../error/AppError.js'
import { selectAllTask } from '../db/task.js'


export default async function showAllTaskService(id: number) {

    try {

        const data = await selectAllTask(id)

        return { success: true, data }
    } catch (err: any) {
        throw err;
    }

}