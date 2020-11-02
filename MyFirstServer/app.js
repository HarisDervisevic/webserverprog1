const express = require('express')
const Persomodel =require('./PersonModel')
const app = express()
const port = 3000
const dBModule = require('./mongoDbTest')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const clientDir = __dirname + "\\client\\"


app.set('view engine', 'ejs')
app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())



app.get('/message', (req, res) =>  {
  const message = messageModel.getAllMessages()
  res.render("pages/message.ejs", {message: message})
})

app.post('/message', async (req, res) => {
  let message = messageModel.newMessage(req.body.message, req.body.email)
  dbmodule.store(message)
  res.render("views/pages/message.ejs")
})


app.get('/', (req, res) => res.sendFile(__dirname + "\\client\\index.html"))
app.get('/style', (req,res) =>{res.sendFile(clientDir + "style.css")})

app.get('/', (req, res) => res.sendFile(__dirname + "\\client\\message.ejs"))


app.post('/', (req, res) => {
  let person =personModel.createPerson({ name: req.body.name, email: req.body.email});
  
  dbmodule.storeElement(person)
  person.save();
  res.redirect('/')
})