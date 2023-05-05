require('dotenv').config('./.env');

const { PORT, LOG_DIR, HOST_DB, DATABASE } = process.env;
module.exports = { PORT, LOG_DIR, HOST_DB, DATABASE };
