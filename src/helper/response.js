function buildResponse(res, status, message) {
  res.status(status);
  res.send(message);
}

export { buildResponse };
