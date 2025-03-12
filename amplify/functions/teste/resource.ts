import { defineFunction, secret } from "@aws-amplify/backend";


export const teste = defineFunction({
    name: 'teste',
    entry: './handler.ts',
    bundling: {
        minify: false
    },
    environment: {
        MONGOCN : secret('SMONGOCN')
    }
});