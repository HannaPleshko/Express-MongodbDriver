const { connect } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllUsersDB() {
  const { students } = await connect();
  return await students.find().toArray();
}

async function getUserByIdDB(_id) {
  const { students } = await connect();
  return students.find({ _id: new ObjectId(_id) }).toArray();
}

async function createUserDB(name, surname) {
  const { students } = await connect();
  await students.insertOne({ name, surname });
}

async function updateUserDB(_id, name, surname) {
  const { students } = await connect();
  await students.updateOne({ _id: new ObjectId(_id) }, { $set: { name, surname } });
}

async function deleteUserDB(_id) {
  const { students } = await connect();
  await students.deleteOne({ _id: new ObjectId(_id) });
}

module.exports = { getAllUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB };
