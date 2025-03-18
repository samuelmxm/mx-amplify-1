import { defineFunction, secret } from "@aws-amplify/backend";

export const obterProjetosDependencyCheck = defineFunction({
    name: 'obterProjetosDependencyCheck',
    entry: './handler.ts',
    bundling: {
        minify: false
    },
    environment: {
        MONGOCN : secret('SMONGOCN')
    }
});