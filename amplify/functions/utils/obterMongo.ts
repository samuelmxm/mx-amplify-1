import { MongoClient } from "mongodb";


let client: MongoClient | undefined;

export const obterMongo = (connectionString: string): MongoClient => {
    if (!client) { client = new MongoClient(connectionString); }
    return client as MongoClient;
}