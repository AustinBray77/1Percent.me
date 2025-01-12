import { Group } from "@/types/group";
import * as mongoDB from "mongodb";
import { connectToDB } from "./databaseservice";

//This function should be used to get the group collection
async function getGroupTable(): Promise<mongoDB.Collection<Group>> {
    const database = await connectToDB();
    return database.collection<Group>("groups");
}

async function getGroup(groupName: string) {
    const groupCollection = await getGroupTable();
    const group = await groupCollection.findOne({ name: groupName });
    return group;
}

async function addGroup(data: Group) {
    const groupCollection = await getGroupTable();
    const result = await groupCollection.insertOne(data);
    return result.insertedId;
}

async function getGroupCollection() {
    const groupCollection = await getGroupTable();
    const groups = groupCollection.find().toArray();

    console.log("Groups returned: " + groups);

    return groups;
}

async function filterGroups(query: any): Promise<Group[]> {
    const groupCollection = await getGroupTable();

    return groupCollection.find(query).toArray();
}

async function getGroupsFromUser(id: string): Promise<Group[]> {
    const groupCollection = await getGroupTable();
    
    const userGroups = await groupCollection.find({members: id}).toArray();

    return userGroups as Group[];
    

}

export {
    addGroup,
    getGroupCollection,
    getGroup,
    getGroupsFromUser,
    getGroupTable,
    filterGroups,
};
