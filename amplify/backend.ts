import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { teste } from './functions/teste/resource';
import { obterRegistrosDependencyCheck } from './functions/obterregistrosdependencycheck/resource';
import { obterProjetosDependencyCheck } from './functions/obterprojetosdependencycheck/resource';
import { obterDependenciasDependencyCheck } from './functions/obterdependenciasdependencycheck/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
  obterRegistrosDependencyCheck, 
  obterDependenciasDependencyCheck,
  obterProjetosDependencyCheck
});
