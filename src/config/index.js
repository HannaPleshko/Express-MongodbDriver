require('dotenv').config('./.env');

const { PORT, LOG_DIR } = process.env;
module.exports = { PORT, LOG_DIR };
