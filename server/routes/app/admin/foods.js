const Food = require('../../../models/food');

// Foods API
module.exports = (router) => {
  // get all foods
  router.get('/admin/foods', (req, res) => {
    Food.find({}, (err, foods) => {
      res.render('admin/foods/foods', {title: "Alimentos", foods: foods});
    });
  });

  router.get('/admin/foods/cadastre', (req, res) => {
    res.render('admin/foods/cadastre', {title: "Cadastrar Alimento"});
  });
  router.post('/admin/foods/cadastre', (req, res) => {
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
  });

  // get a single food
  router.get('/admin/foods/:id', (req, res) => {
    Food.findById(req.params.id, (err, food) => {
      if (err) {
        res.send(err);
      }
      res.render('admin/foods/food', {title: "Alimento", food: food});
    });
  });

  // update a food
  router.put('/admin/foods/:id', (req, res) => {
    Food.findById(req.params.id, (err, food) => {
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
  });

  // delete a food
  router.delete('/admin/foods/:id', (req, res) =>{
    Food.remove({
      _id: req.params.id
    }, (err, food) => {
      if(err) {
        res.send(err);
      }
      res.render('admin/foods/food', {title: "Alimento", user: user, message: 'Alimento deletado'});
    })
  });
}
