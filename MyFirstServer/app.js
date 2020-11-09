const express = require('express')
const personModel =require('./PersonModel')
const app = express()
const port = 3000
const dBModule = require('./mongoDbTest')
const messageModel = require('./messageModel')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const clientDir = __dirname + "\\client\\"


app.set('view engine', 'ejs')
app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())


app.get('/message', (req, res) =>  {
  const message = messageModel.getAllMessages()
  res.render(clientDir +"/message.ejs", {message: message})
})

app.post('/message', async (req, res) => {
  var message = messageModel.newMessage(req.body.message, req.body.email)
  dBModule.store(message)
  res.render(clientDir +"/message.ejs", {message: message})
})

app.get('/', (req, res) => res.sendFile(__dirname + "\\client\\index.html"))
app.get('/style', (req,res) =>{res.sendFile(clientDir + "style.css")})


app.post('/', (req, res) => {
  let person = personModel.createPerson({ name: req.body.name, email: req.body.email});
  
  dBModule.store(person)
  person.save();
  res.redirect('/')
})

const logger = function (req, res, next) {
  console.log('logging')
  next()
}

app.use(logger)

app.listen(port)