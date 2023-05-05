const { MongoClient } = require('mongodb');
const { HOST_DB, DATABASE } = require('./config/index');

async function connect() {
  const MongoDBclient = new MongoClient(HOST_DB);
  await MongoDBclient.connect();
  const db = MongoDBclient.db(DATABASE);
  return { students: db.collection('students') };
}

module.exports = { connect };
