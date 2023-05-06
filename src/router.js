const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  return res.status(200).send("Rota funcionando! Deus abençõe!")
})

router.get('tasks', (req, res) => {
  
})

module.exports = router