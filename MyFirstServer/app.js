const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const clientDir = __dirname + "\\client\\"

const personSchema = new mongoose.Schema({
  name: String,
  email: String
});

const Person = mongoose.model('person', personSchema);

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(__dirname + "\\client\\index.html"))
app.get('/style', (req,res) =>{res.sendFile(clientDir + "style.css")})
app.get('/picture', (req,res) =>{res.sendFile(clientDir + "messi.jpg")})

app.listen(port, () => console.log('Example app listening on port ${port}!'))

app.post('/', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.email)
    const person = new Person({ name: req.body.name, email: req.body.email});
    person.save();
  res.redirect('/')
})