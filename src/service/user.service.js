const { getAllUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB } = require('../repository/user.repository');
const { ExceptionType } = require('../exceptions/exceptions.type');

async function getAllUsers() {
  const users = await getAllUsersDB();
  if (!users.length) throw new Error(ExceptionType.USERS_READ_NOT_FOUND.message);
  return users;
}
async function getUserById(_id) {
  const user = await getUserByIdDB(_id);
  if (!user.length) throw new Error(ExceptionType.USER_READ_NOT_FOUND.message);
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
