const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync({froce: false})
.then(()=>{

  app.get("/getUsers", (req,res) => {
    db.user.findAll()
    .then(result => {
      res.status(200).send(result) 
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.post("/createUser", (req, res) => {
    db.user.create({
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password
    })
    .then(result => {
      res.status(201).send("create user sucess")
    })
    .catch(result => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.listen(8080, () => {
    console.log('server start and listen on port 8080')
  })
})