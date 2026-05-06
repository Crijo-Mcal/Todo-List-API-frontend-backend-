

const baseUrl = "http://localhost:3000";

export type Err = {
    message: string
}

export type Data = {
    id: string,
    title: string,
    completed: boolean,
}

export type ResponseTask = {
    success: boolean,
    err?: Err,
    data?: Data[]
}



export async function showAllTasks(id: number, accessToken: string): Promise<ResponseTask | undefined> {

    try {
        const res = await fetch(`${baseUrl}/showAllTasks`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                id
            })
        })

        const resData = await res.json();

        if (!res.ok) {
            throw new Error(resData.err.message || "Request failed")
        }

        return {
            success: resData.success,
            data: resData.data
        }

    } catch (err: any) {
        console.error(err.message);

    }
}