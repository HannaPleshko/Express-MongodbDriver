const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../service/user.service');
const { SuccessType } = require('../exceptions/exceptions.type');
const { buildResponse } = require('../helper/response');

const route = express.Router();

route.get('/', async (req, res, next) => {
  try {
    buildResponse(res, 200, await getAllUsers());
  } catch (error) {
    next(error);
  }
});

route.get('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params;
    buildResponse(res, 200, await getUserById(_id));
  } catch (error) {
    next(error);
  }
});

route.post('/', async (req, res, next) => {
  try {
    const { name, surname } = req.body;
    await createUser(name, surname);
    buildResponse(res, 201, SuccessType.USERS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

route.put('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params;
    const { name, surname } = req.body;
    await updateUser(_id, name, surname);
    buildResponse(res, 200, SuccessType.USERS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

route.delete('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params;
    await deleteUser(_id);
    buildResponse(res, 200, SuccessType.USERS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

module.exports = route;
