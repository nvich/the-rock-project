const FoodModel = require('../models/food');

exports.showFoods = (req, res) => {
  FoodModel.find({}, (err, foods) => {
    res.render('admin/foods/foods', {title: "Alimentos", foods: foods});
  });
}

exports.showCadastre = (req, res) => {
  res.render('admin/foods/cadastre', {title: "Cadastrar Alimento"});
}

exports.cadastre = (req, res) => {
  const food = new Food();

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
  })
}

exports.showFood = (req, res) => {
  FoodModel.findById(req.params.id, (err, food) => {
    if (err) {
      res.send(err);
    }
    res.render('admin/foods/food', {title: "Alimento", food: food});
  });
}

exports.updateFood = (req, res) => {
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
}

exports.deleteFood = (req, res) => {
  FoodModel.remove({
    _id: req.params.id
  }, (err, food) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/foods/food', {title: "Alimento", user: user, message: 'Alimento deletado'});
  });
}
