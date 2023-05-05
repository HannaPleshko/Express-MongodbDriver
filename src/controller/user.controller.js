const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../service/user.service');

const route = express.Router();

route.get('/', async (req, res) => {
  res.status(200).send(await getAllUsers());
});
route.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  res.status(200).send(await getUserById(_id));
});
route.post('/', async (req, res) => {
  const { name, surname } = req.body;
  res.status(200).send(await createUser(name, surname));
});
route.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const { name, surname } = req.body;
  res.status(200).send(await updateUser(_id, name, surname));
});
route.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  res.status(200).send(await deleteUser(_id));
});

module.exports = route;
