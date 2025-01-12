import * as mongoDB from "mongodb";
import { connectToDB } from "./databaseservice";
import { User } from "@/types/user";
import { Group } from "@/types/group";
import { getGroup } from "./groupservice";

//This function should be used to get the group collection
async function userTable(
    collectionName: string
): Promise<mongoDB.Collection<User>> {
    const database = await connectToDB();
    return database.collection<User>(collectionName);
}

//Remember to check if user aleready exists, if not create a new user
// Return false if the user already exists
async function createUser(data: User): Promise<boolean> {
    const userCollection = await userTable("users");
    const user = await userCollection.findOne({ id: data.id });

    if (user) {
        // return Promise.reject(new Error("User already Exists"));
        return false;
    }
    const result = await userCollection.insertOne(data);
    return true;
}

async function getUserFromId(id: string): Promise<User> {
    const userCollection = await userTable("users");
    const user = await userCollection.findOne({ id: id });
    if (user) {
        return Promise.resolve(user);
    }
    return Promise.reject(new Error("User does not exist"));
}

async function getUsersInGroup(group: Group): Promise<User[]> {
    const g = await getGroup(group.name);
    if (!g) {
        return Promise.reject(new Error("Group does not exist"));
    }

    let members = g.members.map(async (id) => {
        return await getUserFromId(id);
    });

    return members;
}

export { createUser, getUserFromId, getUsersInGroup, userTable };