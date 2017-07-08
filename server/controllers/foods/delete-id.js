const FoodModel = require('../../models/food');

module.exports = function(req, res, next) {
  FoodModel.remove({
    _id: req.params.id
  }, (err, food) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/foods/food', {title: "Alimento", user: user, message: 'Alimento deletado'});
  });
};
