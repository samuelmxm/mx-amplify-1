import { defineFunction, secret } from "@aws-amplify/backend";
//import { env } from '$amplify/env/sayHello';


export const sayHello = defineFunction({
    name: 'sayHello',
    entry: './handler.ts',
    bundling: {
        minify: false
    },
    environment: {
        REGION: "Região",
        TABLE_NAME : "TableName",
        MONGOCN : secret('SMONGOCN')
    }
});