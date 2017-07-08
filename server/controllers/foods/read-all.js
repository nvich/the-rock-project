const FoodModel = require('../../models/food');

module.exports = function(req, res, next) {
  FoodModel.find({}, (err, foods) => {
    res.render('admin/foods/foods', {title: "Alimentos", foods: foods});
  });
};
