import { MESSAGES_ERROR } from '~/globals';

const getMessageErrorByResponse = (error: any): string => {
  const status = error?.response?.status || error?.statusCode;
  if (status === 404) {
    return MESSAGES_ERROR.resourceNotFound;
  }
  return error?.response?.data?.message || error?.response?.message || error?.statusMessage || MESSAGES_ERROR.somethingWentWrong;
};

export default getMessageErrorByResponse;
