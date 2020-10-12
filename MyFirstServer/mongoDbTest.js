const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });

const Person = mongoose.model('Person', personSchema);

exports.store = /*function*/(element) => {
     element.save(()=>{
       console.log("Successfully saved person in database!")
     })
}