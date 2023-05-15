module.exports = (
  statusCode = 500,
  message = 'Erro interno do servidor',
  ) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};