const express = require('express')
const router = express.Router()

const categoriesController = require('./controllers/categoriesController')

// router.get('/', (req, res) => {
//   return res.status(200).send("Rota funcionando! Deus abençõe!")
// })

router.get('/categories', categoriesController.getAll)
router.post('/categories', categoriesController.addCategory)
router.post('/something', (req, res) => {
  console.log(req.)
  res.status(200).json({message: "It's working!"})
})

module.exports = router