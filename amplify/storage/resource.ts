import { defineStorage } from "@aws-amplify/backend";

export const registroStore = defineStorage({
    name: 'registros',
    access: (allow) => ({
        'registros/*': [
            allow.authenticated.to(['read','write'])
        ],
        'html/*': [
            allow.authenticated.to(['read','write'])
        ],
    })
});