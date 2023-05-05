const { MongoClient } = require('mongodb');

async function connect() {
  const MongoDBclient = new MongoClient('mongodb://localhost:27017');

  await MongoDBclient.connect();

  const db = MongoDBclient.db('hschool');

  return { students: db.collection('students') };
}

module.exports = { connect };
