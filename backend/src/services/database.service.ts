import * as mongoDB from "mongodb";
import * as dotenv from "dotenv"; 
import Database from "@/groups/database";

dotenv.config();
let client: mongoDB.MongoClient | null = null;
let db: mongoDB.Db | null = null;

export async function connectToDB (): Promise<mongoDB.Db> {
    
    if (db){
        return db;
    }
    
    if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
        throw new Error("MONGODB_URI or DB_NAME environment variables are not set");
    }

    client = new mongoDB.MongoClient(process.env.MONGODB_URI);

    await client.connect();
       
    db = client.db(process.env.DB_NAME);
    return db;
}

export async function getGroup<T>(collectionName: string): Promise<mongoDB.Collection<T>> {
    const database = await connectToDB();
    return database.collection<T>(collectionName);
}

export async function addGroup (data: Database){
    const groupCollection = await getGroup<Database>("groups");
    const result = await groupCollection.insertOne(data);
    return result.insertedId;
}

export async function getGroupCollection() {
    const groupCollection = await getGroup<Database>("group");
    const groups = await groupCollection.find({}).toArray();
    return groups;
}