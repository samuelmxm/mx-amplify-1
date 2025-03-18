import { defineFunction, secret } from "@aws-amplify/backend";
//import { env } from '$amplify/env/sayHello';


export const obterRegistrosDependencyCheck = defineFunction({
    name: 'obterRegistrosDependencyCheck',
    entry: './handler.ts',
    bundling: {
        minify: false
    },
    environment: {
        MONGOCN : secret('SMONGOCN')
    }
});