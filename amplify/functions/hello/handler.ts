//import type { Handler } from 'aws-lambda';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/sayHello';
type handlerType = Schema['sayHello']['functionHandler']


//export const handler: Handler = async (event: any, context: any) => {
export const handler: handlerType = async (event, context) => {
    const  tableName  = env.TABLE_NAME;
    const region = env.REGION;
    const { name } = event.arguments;
    return `Olá ${name}! - table name: ${tableName} - mongocn: ${env.MONGOCN}`;
}