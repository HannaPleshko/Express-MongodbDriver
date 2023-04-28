const {
    getAllUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB
} = require('../repository/user.repository')

async function getAllUsers() {
    return await getAllUsersDB()
}
async function getUserById(_id) {
    return await getUserByIdDB(_id)
}
async function createUser(name, surname) {
    return await createUserDB(name, surname)
}
async function updateUser(_id, name, surname) {
    return await updateUserDB(_id, name, surname)
}
async function deleteUser(_id) {
    return await deleteUserDB(_id)
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }