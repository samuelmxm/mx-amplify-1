import { defineFunction, secret } from "@aws-amplify/backend";

export const obterRegistrosPorData = defineFunction({
    name: 'obterRegistrosPorData',
    entry: './handler.ts',
    bundling: {
        minify: false
    },
    environment: {
        MONGOCN : secret('SMONGOCN')
    }
});