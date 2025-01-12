import axios from "axios";
import { Streak } from "../types/streak";

function getUserStreaks(user_id: string): Promise<Streak> {
    return axios.post(
        "/api/streaks/get",
        JSON.stringify({ user_id: user_id }),
        { headers: { "Content-Type": "application/json" } }
    );
}

function incrementStreak(user_id: string, streak: string): Promise<Streak> {
    return axios.post(
        "/api/streaks/increment",
        JSON.stringify({ user_id: user_id, streak: streak }),
        { headers: { "Content-Type": "application/json" } }
    );
}

export { getUserStreaks, incrementStreak };
