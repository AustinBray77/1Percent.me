import * as mongoDB from "mongodb";
import { connectToDB } from "./databaseservice";
import { User } from "@/types/user";
import { Group } from "@/types/group";

//This function should be used to get the group collection
async function userCollection(
    collectionName: string
): Promise<mongoDB.Collection<User>> {
    const database = await connectToDB();
    return database.collection<User>(collectionName);
}

//Remember to check if user aleready exists, if not create a new user
// Return false if the user already exists
async function createUser(data: User): Promise<boolean> {
    return Promise.reject(new Error("Not implemented"));
}

async function getUserFromId(id: string): Promise<User> {
    return Promise.reject(new Error("Not implemented"));
}

async function getUsersInGroup(group: Group): Promise<User[]> {
    return Promise.reject(new Error("Not implemented"));
}

export { createUser, getUserFromId, getUsersInGroup, userCollection };
