const foodsController = require('../../../controllers/foods');
// Foods
module.exports = (router, isAuthenticated) => {
  // get all foods
  router.get('/admin/foods', isAuthenticated, foodsController.readAll);

  router.get('/admin/foods/cadastre', foodsController.showCadastre);

  router.post('/admin/foods/cadastre', foodsController.createId);
  // get a single food
  router.get('/admin/foods/:id', foodsController.readId);
  // update a food
  router.put('/admin/foods/:id', foodsController.updateId);
  // delete a food
  router.delete('/admin/foods/:id', foodsController.deleteId);
}
