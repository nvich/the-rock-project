const Food    = require('../../models/food');

// Foods API
module.exports = (router) => {
  // get all foods
  router.get('/foods', (req, res) => {
    Food.find({}, (err, foods) => {
      if (err) {
        res.send(err);
      }
      res.json(foods);
    });
  });

  // add a post
  router.post('/foods', (req, res) => {
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
      res.json(food);
    })
  });

  // get a single food
  router.get('/foods/:id', (req, res) => {
    Food.findById(req.params.id, (err, food) => {
      if (err) {
        res.send(err);
      }
      res.json(food);
    });
  });

  // update a food
  router.put('/foods/:id', (req, res) => {
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
        res.json({ message: 'Food atualizado' });
      })
    });
  });

  // delete a food
  router.delete('/foods/:id', (req, res) =>{
    Food.remove({
      _id: req.params.id
    }, (err, food) => {
      if(err) {
        res.send(err);
      }
      res.json({ message: 'Food deletado' });
    })
  });
}
