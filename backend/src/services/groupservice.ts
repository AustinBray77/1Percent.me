import { Group } from "@/types/group";
import * as mongoDB from "mongodb";
import { connectToDB } from "./databaseservice";

//This function should be used to get the group collection
async function getGroupTable(
    collectionName: string
): Promise<mongoDB.Collection<Group>> {
    const database = await connectToDB();
    return database.collection<Group>(collectionName);
}


async function getGroup (groupName: string){
    const groupCollection = await getGroupTable("groups");
    const group = await groupCollection.findOne({name: groupName});
    return group;
}

async function addGroup(data: Group) {
    const groupCollection = await getGroupTable("groups");
    const result = await groupCollection.insertOne(data);
    return result.insertedId;
}



async function getGroupCollection() {
    const groupCollection = await getGroupTable("group");
    const groups = await groupCollection.find({}).toArray();
    return groups;
}

async function getGroupsFromUser(id: string): Promise<Group[]> {
    return Promise.reject(new Error("Not implemented"));
}

export { addGroup, getGroupCollection, getGroup, getGroupsFromUser };
