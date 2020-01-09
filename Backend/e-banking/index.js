const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

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

  app.post("/getBalance", (req, res) => {
    db.account.findOne({where: {acc_number: req.body.acc_number}})
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
        user_id: output.id,
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

  app.post("/getAccountById", (req,res) =>{
    
    db.account.findAll({where: {user_id: req.body.id}})
    .then(result => {
      res.status(200).send(result)
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
      }
        res.send("Login fail")
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

  app.put("/updateBalance", (req, res) => {
    db.account.update(
      {balance: req.body.balance_send},
      {where: {acc_number: req.body.acc_send}} 
    )
    db.account.update(
      {balance: req.body.balance_recive},
      {where: {acc_number: req.body.acc_recive}}
    )
    .then(result => {
      res.status(200).send("update sucess")
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
  })

  app.delete("/deleteAccount", (req, res) => {
    db.user.destroy({
      where: {id: req.body.id}
    })
    .then(result => {
      res.status(200).send("delete sucess")
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