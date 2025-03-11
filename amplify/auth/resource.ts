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
  userAttributes: {
    nickname: {
      mutable: true,
      required: false//se colocar um novo atributo com true após deploy inicial dá erro ao fazer o deploy
      
    }
  },
  
  triggers: {
    preSignUp: preSignUp
  }
});
