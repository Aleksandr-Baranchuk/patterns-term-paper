import { Keyable } from '~/types';

const createStringFromTemplate = (template: string, variables: Keyable) => {
  return template.replace(/{([^{]+)}/g, (_, varName) => {
    return variables[varName];
  });
};

export default createStringFromTemplate;
