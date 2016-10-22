const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: '{PATH} is required!' },
  email: { type: String, required: '{PATH} is required!' },
  username: { type: String, required: '{PATH} is required!' },
  password: { type: String, required: '{PATH} is required!' }
},
{
  collection: 'users',
  versionKey: false
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);
