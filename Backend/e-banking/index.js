const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync({froce: true})
.then(()=>{
  app.listen(8080, () => {
    console.log('server start and listen on port 8080')
  })

})