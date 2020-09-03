const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(__dirname + "\\client\\index.html"))
app.get('/style', (req,res) =>{res.sendFile(clientDir + "style.css")})
app.get('/picture', (req,res) =>{res.sendFile(clientDir + "messi.jpg")})

app.listen(port, () => console.log('Example app listening on port ${port}!'))