import { Streak } from "@/types/streak";
import * as mongoDB from "mongodb";
import { connectToDB } from "./databaseservice";

async function streakTable (
    collectionName: string
): Promise<mongoDB.Collection<Streak>> {
    const database = await connectToDB();
    return database.collection<Streak>(collectionName);
}

async function getUserStreaks(id: string): Promise<Streak> {
    const streaks = await streakTable("streaks");
    const userStreaks = await streaks.findOne({userid: id});
    if (userStreaks){
        return userStreaks;
    }
    return Promise.reject(new Error("Streaks do not exist"));
}

async function incrementStreak(id: string, field: string): Promise<Streak> {
    const streaks = await streakTable("streaks");
    const userStreak = await streaks.findOne({userid: id});
    if(userStreak){
        const incStreak = await streaks.updateOne(
            {userid: id},
            {$inc: {[field]:1}}
        );
        const updatedStreak = await streaks.findOne({userid: id});
        if (updatedStreak){
            return updatedStreak;
        }
    }
    return Promise.reject(new Error("Streaks do not exist"));
}

async function resetStreak(id: string, field: string): Promise<Streak> {
    const streaks = await streakTable("streaks");
    const userStreak = await streaks.findOne({userid: id});
    if(userStreak){
        const reset = await streaks.updateOne(
            {userid: id},
            {[field]: 0}
        );
        const updatedStreak = await streaks.findOne({userid: id});
        if (updatedStreak){
            return updatedStreak;
        }
    }
    return Promise.reject(new Error("Streaks do not exist"));
}

export { getUserStreaks, incrementStreak, resetStreak };
