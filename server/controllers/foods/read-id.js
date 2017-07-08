const FoodModel = require('../../models/food');

module.exports = function(req, res, next) {
  FoodModel.findById(req.params.id, (err, food) => {
    if (err) {
      res.send(err);
    }
    res.render('admin/foods/food', {title: "Alimento", food: food});
  });
};
