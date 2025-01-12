import axios, { AxiosResponse } from "axios";
import { User } from "../types/user";

function addUser(user: User): Promise<string> {
    return axios
        .post(
            "http://localhost:3000/api/profile/add",
            JSON.stringify({ user: user }),
            {
                headers: { "Content-Type": "application/json" },
            }
        )
        .then((res: AxiosResponse<any, any>) => {
            return res.data["user_id"] as string;
        })
        .catch((err) => {
            console.error(err);
            return "NULL";
        });
}

function getUser(user_id: string): Promise<User> {
    return axios
        .post(
            "http://localhost:3000/api/profile/get",
            JSON.stringify({ user_id: user_id }),
            {
                headers: { "Content-Type": "application/json" },
            }
        )
        .then((res: AxiosResponse<any, any>) => {
            return res.data["user"] as User;
        })
        .catch((err) => {
            console.error(err);
            return {} as User;
        });
}

export { addUser, getUser };
