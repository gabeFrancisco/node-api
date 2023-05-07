const conn = require('./connection')

const getAllAsync = async ()  => {
  const [tasks, buffer] = await conn.execute('select * from categories');
  return tasks;
}

const addAsync = async (name) => {
  await conn.execute(`insert into categories values(null, ${name});`)
}

module.exports = {
  getAllAsync,
  addAsync
}