const db = require('../config')

const readUser = async (userId) => {
  return await db('user').where({ id: userId }).first()
}

const createUser = async (data) => {
  return await db('user').insert(data, ['*'])
}

const updateUser = async (userId, updates) => {
  await db('user').where({ id: userId }).update(updates)
}

const removeUser = async (userId) => {
  await db('user').where({ id: userId }).delete()
}

module.exports = {
  readUser,
  createUser,
  updateUser,
  removeUser,
}
