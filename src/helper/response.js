function buildResponse(res, status, message) {
  res.status(status);
  res.send(message);
}

module.exports = { buildResponse };
