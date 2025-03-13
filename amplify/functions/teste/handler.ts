import type { Handler } from 'aws-lambda';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/teste'; //para gerar o objeto, necessário rodar o 'npx ampx sandbox'
import {MongoClient} from 'mongodb';
type handlerType = Schema['teste']['functionHandler']

const client = new MongoClient(env.MONGOCN);

export const handler: Handler = async (event: any, context: any) => {

    const campos = {
        _id: 1,   // Incluir campo nome
        DataRegistro: 1   // Incluir campo email
      };

    const db = await client.db("analise_de_codigo");
    const collection = await db.collection("registro_dependency_check");
    const body = await collection.find().project(campos)
    //.limit(10)
    .toArray();
    const response = {
        statusCode: 200,
        body
    };
    return response;
}