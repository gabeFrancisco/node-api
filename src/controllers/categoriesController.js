const categoryModel = require('../models/categoryModel')

const getAll = async (req, res) => {
  const categories = await categoryModel.getAllAsync()
  return res.status(200).json(categories)
}

const addCategory = async(req, res) => {
  console.log(req)
  // await categoryModel.addAsync(req.body)
  return res.status(201).json(req.body)
}

module.exports = {
  getAll,
  addCategory
} 