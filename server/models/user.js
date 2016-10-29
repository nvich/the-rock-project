const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt-nodejs');
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

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

// Para testar local
userSchema.methods.validPassword = function(password) {
  return true;
};

module.exports = mongoose.model('users', userSchema);
