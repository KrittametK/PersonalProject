const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync({froce: true})
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
    .then(output => {
      db.account.create({
        user_id: 1,
        acc_type: req.body.acc_type,
        acc_number: req.body.acc_number,
        balance: req.body.balance
      })
      .then(result => {
        res.status(201).send("create user sucess")
      })
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.post("/addAccount", (req, res) => {
    db.account.create({
      user_id: req.body.id,
      acc_type: req.body.acc_type,
      acc_number: req.body.acc_number,
      balance: req.body.balance
    })
    .then(result => {
      res.status(201).send("create user sucess")
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.get("/getAccountById", (req,res) =>{
    db.account.findAll({where: {user_id: req.body.id}})
    .then(result => {
      res.status(201).send(result)
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.post("/login", (req, res) => {
    db.user.findOne({where: {username: req.body.username , password: req.body.password}})
    .then(result => {
      if(result != null){
        res.status(200).send(result)
      console.log("Login sucess")
      }
      res.send("login fail")
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.post("/getTransaction", (req, res) => {
    db.transaction.findAll({where: {acc_number: req.body.acc_number}})
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.post("/transaction", (req, res) => {
    console.log(req.body.amount)
    db.transaction.create({
      amount: req.body.amount,
      trans_type: "+++",
      acc_number: req.body.acc_send
    })
    db.transaction.create({
      amount: req.body.amount,
      trans_type: "---",
      acc_number: req.body.acc_recive
    })
    .then(resule => {
      res.status(201).send("transaction complete")
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.listen(8080, () => {
    console.log('server start and listen on port 8080')
  })
})