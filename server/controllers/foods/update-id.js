const FoodModel = require('../../models/food');

module.exports = function(req, res, next) {
  FoodModel.findById(req.params.id, (err, food) => {
    if(err) {
      res.send(err);
    }
    food.name         = req.body.name;
    food.amount       = req.body.amount;
    food.protein      = req.body.protein;
    food.carbohydrate = req.body.carbohydrate;
    food.calorie      = req.body.calorie;
    food.fat          = req.body.fat;
    food.sodium       = req.body.sodium;
    food.potassium    = req.body.potassium;
    food.cholesterol  = req.body.cholesterol;

    food.save((err) => {
      if(err) {
        res.send(err);
      }
      res.render('admin/foods/food', {title: "Alimento", user: user, message: 'Alimento atualizado'});
    })
  });
};
