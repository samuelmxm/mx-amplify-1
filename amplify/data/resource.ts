import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { sayHello } from '../functions/hello/resource';
import {teste} from '../functions/teste/resource';
import { obterRegistrosDependencyCheck } from '../functions/obterregistrosdependencycheck/resource';
import { obterDependenciasDependencyCheck } from '../functions/obterdependenciasdependencycheck/resource';
import { obterProjetosDependencyCheck } from '../functions/obterprojetosdependencycheck/resource';

const schema = a.schema({
  sayHello: a.query().arguments({
    name: a.string()
  }).returns(a.string()).handler(a.handler.function(sayHello))
  .authorization((allow) => [allow.authenticated()]),

  teste: a.query().arguments({
    name: a.string()
  }).returns(a.json()).handler(a.handler.function(teste))
  .authorization((allow) => [allow.authenticated()]),

  obterRegistrosDependencyCheck: a.query().returns(a.json())
  .handler(a.handler.function(obterRegistrosDependencyCheck))
  .authorization((allow) => [allow.authenticated()]),

  obterDependenciasDependencyCheck: a.query().arguments({
    id: a.string()
  }).returns(a.json()).handler(a.handler.function(obterDependenciasDependencyCheck))
  .authorization((allow) => [allow.authenticated()]),

  obterProjetosDependencyCheck: a.query().arguments({
    id: a.string(),
    idRegistro: a.string(),
    offset: a.integer(),
  }).returns(a.json()).handler(a.handler.function(obterProjetosDependencyCheck))
  .authorization((allow) => [allow.authenticated()]),

  Registros: a
    .model({
      id: a.id(),
      data: a.string()
    })
    .authorization((allow) => [allow.authenticated()]),
});


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

