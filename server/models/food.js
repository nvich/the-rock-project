const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: '{PATH} is required!'},
  amount: { type: String, required: '{PATH} is required!'},
  protein: { type: String, required: '{PATH} is required!'},
  carbohydrate: { type: String, required: '{PATH} is required!'},
  calorie: { type: String, required: '{PATH} is required!'},
  fat: { type: String, required: '{PATH} is required!'},
  sodium: { type: String, required: '{PATH} is required!'},
  potassium: { type: String, required: '{PATH} is required!'},
  cholesterol: { type: String, required: '{PATH} is required!'}
},
{
  collection: 'foods',
  versionKey: false
});

module.exports = mongoose.model('foods', foodSchema);
