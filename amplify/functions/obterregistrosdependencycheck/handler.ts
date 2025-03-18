import { MongoClient } from 'mongodb';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/obterRegistrosDependencyCheck'; //para gerar o objeto, necessário rodar o 'npx ampx sandbox'
import {obterMongo} from '../utils/obterMongo';

type handlerType = Schema['obterRegistrosDependencyCheck']['functionHandler'];


export const handler: handlerType = async (event, context) => {

    const campos = {
        _id: 1,   // Incluir campo nome
        DataRegistro: 1   // Incluir campo email
    };

    const db = await obterMongo(env.MONGOCN).db("analise_de_codigo");
    const collection = await db.collection("registro_dependency_check");
    const retorno = await collection.find().project(campos).sort({DataRegistro: -1}).toArray();
    return retorno;
}