const Food = require('../models/food');

// Posts API
module.exports = function(apiRouter){

  // get all foods
  apiRouter.get('/foods', function(req, res){
    Food.find({}, function(err, foods){
      if (err) {
        res.send(err);
      }
      res.json(foods);
    });
  });

  // add a post
  apiRouter.post('/foods', function(req, res){
    const food = new Food();
    food.title = req.body.title;
    food.body = req.body.body;

    food.name         = req.body.name;
    food.amount       = req.body.amount;
    food.protein      = req.body.protein;
    food.carbohydrate = req.body.carbohydrate;
    food.calorie      = req.body.calorie;
    food.fat          = req.body.fat;
    food.sodium       = req.body.sodium;
    food.potassium    = req.body.potassium;
    food.cholesterol  = req.body.cholesterol;

    food.save(function(err, food){
      if(err) {
        res.send(err);
      }
      res.json(food);
    })
  });

  // get a single food
  apiRouter.get('/foods/:id', function(req, res){
    Food.findById(req.params.id, function(err, food){
      if (err) {
        res.send(err);
      }
      res.json(food);
    });
  });

  // update a food
  apiRouter.put('/foods/:id', function(req, res){
    Food.findById(req.params.id, function(err, food){
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

      food.save(function(err){
        if(err) {
          res.send(err);
        }
        res.json({ message: 'Food atualizado' });
      })
    });
  });

  // delete a food
  apiRouter.delete('/foods/:id', function(req, res){
    Food.remove({
      _id: req.params.id
    }, function(err, food){
      if(err) {
        res.send(err);
      }
      res.json({ message: 'Food deletado' });
    })
  });
};
