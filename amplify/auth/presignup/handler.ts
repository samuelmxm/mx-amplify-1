import { PreSignUpTriggerHandler } from "aws-lambda";

export const handler : PreSignUpTriggerHandler = async (event) => {

    const email = event.request.userAttributes['email'];

    if(!email.endsWith('@mxm.com.br')){
        throw new Error('E-mail deve ser da MXM.');
    }
};