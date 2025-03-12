import type { Handler } from 'aws-lambda';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/teste'; //para gerar o objeto, necessário rodar o 'npx ampx sandbox'
import {MongoClient} from 'mongodb';
type handlerType = Schema['teste']['functionHandler']



export const handler: Handler = async (event: any, context: any) => {
    const client = new MongoClient(env.MONGOCN);
    const db = await client.db("analise_de_codigo");
    const collection = await db.collection("registro_dependency_check");
    const body = await collection.find().limit(10).toArray();
    const response = {
        statusCode: 200,
        body
    };
    return response;
}