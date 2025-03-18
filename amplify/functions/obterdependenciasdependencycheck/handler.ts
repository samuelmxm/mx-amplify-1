import { MongoClient, ObjectId } from 'mongodb';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/obterRegistrosDependencyCheck'; //para gerar o objeto, necessário rodar o 'npx ampx sandbox'
import { obterMongo } from '../utils/obterMongo';

type handlerType = Schema['obterDependenciasDependencyCheck']['functionHandler'];

export const handler: handlerType = async (event, context) => {

    const { id } = event.arguments;

    const campos = {
        _id: 1,   // Incluir campo nome
        DataRegistro: 1   // Incluir campo email
    };

    const db = await obterMongo(env.MONGOCN).db("analise_de_codigo");
    const registros = await db.collection("registro_dependency_check");
    
    const registro = await registros.findOne({ _id: new ObjectId(id as string) });

    return registro;

}