const FoodModel = require('../../models/food');

module.exports = function(req, res, next) {
  const food = new FoodModel();

  food.name         = req.body.name;
  food.amount       = req.body.amount;
  food.protein      = req.body.protein;
  food.carbohydrate = req.body.carbohydrate;
  food.calorie      = req.body.calorie;
  food.fat          = req.body.fat;
  food.sodium       = req.body.sodium;
  food.potassium    = req.body.potassium;
  food.cholesterol  = req.body.cholesterol;

  food.save((err, food) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/foods/cadastre', {title: "Alimentos", food: food});
  });
};
