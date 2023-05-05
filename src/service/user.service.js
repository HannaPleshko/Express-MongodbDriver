const { getAllUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB } = require('../repository/user.repository');
const { ExceptionType } = require('../exceptions/exceptions.type');
const HttpException = require('../exceptions/HttpException');

async function getAllUsers() {
  const users = await getAllUsersDB();
  if (!users.length) throw new HttpException(404, ExceptionType.USERS_READ_NOT_FOUND);
  return users;
}
async function getUserById(_id) {
  const user = await getUserByIdDB(_id);
  if (!user.length) throw new HttpException(404, ExceptionType.USER_READ_NOT_FOUND);
  return user;
}
async function createUser(name, surname) {
  await createUserDB(name, surname);
}
async function updateUser(_id, name, surname) {
  await updateUserDB(_id, name, surname);
}
async function deleteUser(_id) {
  await deleteUserDB(_id);
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
