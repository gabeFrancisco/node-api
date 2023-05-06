const bodyParser = require('body-parser')
const express = require('express')
const json = express.json
const app = express()
const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'nodeApi',
  socketPath: '/var/run/mysqld/mysqld.sock'
})

conn.connect(err => {
  if(err){
    console.log(err)
    return
  }
  console.log("Connection established!");
})

conn.end(err => {
  if(err){
    console.log(err)
    return
  }
  console.log("Connection finished!")
})

const PORT = process.env.PORT || '3500'

app.get('/', (req, res) => {
  res.send({
    name: "Jesus",
    role: "Savior!"
  })
})

app.listen(PORT, () => console.log(`Server is runnig at http://localhost:${PORT}/`))