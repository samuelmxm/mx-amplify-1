import { defineFunction, secret } from "@aws-amplify/backend";

export const obterDependenciasDependencyCheck = defineFunction({
    name: 'obterDependenciasDependencyCheck',
    entry: './handler.ts',
    bundling: {
        minify: false
    },
    environment: {
        MONGOCN : secret('SMONGOCN')
    }
});