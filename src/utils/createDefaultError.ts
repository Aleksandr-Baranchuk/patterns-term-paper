const createDefaultError = (rawError: any) => {
  const error = unref(rawError);
  const statusMessage = getMessageErrorByResponse(error);
  const statusCode = error?.response?.status || error?.status || 500;
  return createError({ statusMessage, statusCode });
};

export default createDefaultError;
