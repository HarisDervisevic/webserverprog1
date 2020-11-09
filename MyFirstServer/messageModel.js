const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: String,
  email: String,
});

const Message = mongoose.model('message', messageSchema);

exports.createMessage = (message, email) => {
  var message = new Message({
      message: messsage, 
      email: email, 
     })

     return message
}

exports.getAllMessages = async () => {
    let message = await message.find({})
    return message
}