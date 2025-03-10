//import type { Handler } from 'aws-lambda';
import{ Schema } from '../../data/resource';
type handlerType = Schema['sayHello']['functionHandler']

//export const handler: Handler = async (event: any, context: any) => {
    export const handler: handlerType = async (event, context) => {
    const { name } = event.arguments;
    return `Olá ${name}!`;
}