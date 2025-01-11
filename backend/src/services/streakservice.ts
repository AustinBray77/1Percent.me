import { Streak } from "@/types/streak";
import * as mongoDB from "mongodb";
import { connectToDB } from "./databaseservice";

async function getUserStreaks(id: string): Promise<Streak> {
    return Promise.reject(new Error("Not implemented"));
}

async function incrementStreak(id: string, field: string): Promise<Streak> {
    return Promise.reject(new Error("Not implemented"));
}

async function resetStreak(id: string, field: string): Promise<Streak> {
    return Promise.reject(new Error("Not implemented"));
}

export { getUserStreaks, incrementStreak, resetStreak };
