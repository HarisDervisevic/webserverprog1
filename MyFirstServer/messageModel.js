const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const message = mongoose.model('message', messageSchema);

exports.createMessage = (name, email => {
  var message = new message({
      name: name, 
      email: email, 
     })

     return messsage
})

exports.getAllMessage = async () => {
    let message = await message.find({})
    return message
}