import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { sayHello } from '../functions/hello/resource';
import {teste} from '../functions/teste/resource';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  sayHello: a.query().arguments({
    name: a.string()
  }).returns(a.string()).handler(a.handler.function(sayHello))
  .authorization((allow) => [allow.publicApiKey()]),

  teste: a.query().arguments({
    name: a.string()
  }).returns(a.json()).handler(a.handler.function(teste))
  .authorization((allow) => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
  },
});

