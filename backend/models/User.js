// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email:    { type: String, required: true},
  password: { type: String,},
  Numberid:{type:String}
});

module.exports = mongoose.model('User', UserSchema);
