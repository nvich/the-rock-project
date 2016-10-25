const usersController = require('../../../controllers/users');
// UserModels
module.exports = (router) => {
  // get all users
  router.get('/admin/users', usersController.showUsers);

  // get a single user
  router.get('/admin/users/:id', usersController.showUser);

  // update a user
  router.put('/admin/users/:id', usersController.updateUser);

  // delete a user
  router.delete('/admin/users/:id', usersController.deleteUser);
}
