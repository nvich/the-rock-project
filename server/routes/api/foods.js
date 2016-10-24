const Food = require('../../models/food');

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
}
