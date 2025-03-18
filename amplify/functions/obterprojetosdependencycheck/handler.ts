import { MongoClient } from 'mongodb';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/obterProjetosDependencyCheck'; //para gerar o objeto, necessário rodar o 'npx ampx sandbox'
import { obterMongo } from '../utils/obterMongo';

type handlerType = Schema['obterProjetosDependencyCheck']['functionHandler'];

export const handler: handlerType = async (event, context) => {
    let { id, offset } = event.arguments;

    const chunk = 900000;
    const db = await obterMongo(env.MONGOCN).db("analise_de_codigo");
    const registros = await db.collection("html_projeto_dependency_check");

    const registro = await registros.findOne({ IdProjeto: id as string });

    if (!registro || !registro.HTML) { return {}; }
    if (!offset) { offset = 0; }
    return {
        html: registro.HTML.slice(offset, offset + chunk),
        offset: offset + chunk,
        tamanhoTotal: registro.HTML.length,
        temMais: offset < registro.HTML.length
    };
}