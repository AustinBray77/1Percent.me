import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();
let client: mongoDB.MongoClient | null = null;
let db: mongoDB.Db | null = null;

async function connectToDB(): Promise<mongoDB.Db> {
    if (db) {
        return db;
    }

    if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
        throw new Error(
            "MONGODB_URI or DB_NAME environment variables are not set"
        );
    }

    client = new mongoDB.MongoClient(process.env.MONGODB_URI);

    await client.connect();

    db = client.db(process.env.DB_NAME);
    return db;
}

export { connectToDB };
