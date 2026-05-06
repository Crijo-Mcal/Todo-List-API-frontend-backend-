import { useUserContext } from "../context/userContext";
import { showAllTasks, type Data } from "../server/showAllTasks";
import { useState } from "react";


export function useDashboardPage() {
    const user = useUserContext();
    const [todos, setTodos] = useState<Data[]>([]);

    const fetchTasks = async () => {
        const id = user.User?.dataUser.id;
        const AccessToken = user.User?.AccessToken;

        if (!id || !AccessToken) return;

        const res = await showAllTasks(id, AccessToken);
        if (!res?.data) return;

        setTodos(res.data);
    };

    return {
        User: user.User,
        todos,
        setTodos,
        fetchTasks
    };
}