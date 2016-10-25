const foodsController = require('../../../controllers/foods');
// Foods
module.exports = (router) => {
  // get all foods
  router.get('/admin/foods', foodsController.showFoods);

  router.get('/admin/foods/cadastre', foodsController.showCadastre);

  router.post('/admin/foods/cadastre', foodsController.cadastre);
  // get a single food
  router.get('/admin/foods/:id', foodsController.showFood);
  // update a food
  router.put('/admin/foods/:id', foodsController.updateFood);
  // delete a food
  router.delete('/admin/foods/:id', foodsController.deleteFood);
}
