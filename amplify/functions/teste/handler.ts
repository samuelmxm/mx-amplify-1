import type { Handler } from 'aws-lambda';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/teste'; //para gerar o objeto, necessário rodar o 'npx ampx sandbox'
import {MongoClient} from 'mongodb';
type handlerType = Schema['teste']['functionHandler']

const client = new MongoClient(env.MONGOCN);

export const handler: Handler = async (event: any, context: any) => {

   return '';
}