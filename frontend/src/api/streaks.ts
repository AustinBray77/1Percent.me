import axios, { AxiosResponse } from "axios";
import { Streak } from "../types/streak";

function getUserStreaks(user_id: string): Promise<Streak> {
    return axios
        .post(
            "http://localhost:3000/api/streaks/get",
            JSON.stringify({ user_id: user_id }),
            {
                headers: { "Content-Type": "application/json" },
            }
        )
        .then((res: AxiosResponse<any, any>) => {
            return res.data["streaks"] as Streak;
        })
        .catch((err) => {
            console.error(err);
            return {} as Streak;
        });
}

function incrementStreak(user_id: string, streak: string): Promise<boolean> {
    return axios
        .post(
            "http://localhost:3000/api/streaks/increment",
            JSON.stringify({ user_id: user_id, streak: streak }),
            { headers: { "Content-Type": "application/json" } }
        )
        .then((res: AxiosResponse<any, any>) => {
            return true;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
}

export { getUserStreaks, incrementStreak };
