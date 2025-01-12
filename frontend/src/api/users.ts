import axios from "axios";
import { User } from "../types/user";

function addUser(user: User) {
    return axios.post("/api/users/add", JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
    });
}

function getUser(user_id: string) {
    return axios.post("/api/users/get", JSON.stringify({ user_id: user_id }), {
        headers: { "Content-Type": "application/json" },
    });
}

export { addUser, getUser };
