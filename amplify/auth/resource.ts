import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from './presignup/resources';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
 /* userAttributes: {
    nickname: {
      mutable: true,
      required: true
      
    }
  },
  */ // se colocar novos atributos após deploy inicial dá erro de deploy
  triggers: {
    preSignUp: preSignUp
  }
});
