const usersController = require('../../../controllers/users');
// Users
module.exports = (router, isAuthenticated) => {
  // get all users
  router.get('/admin/users', isAuthenticated, usersController.showUsers);

  // get a single user
  router.get('/admin/users/:id', usersController.showUser);

  // update a user
  router.put('/admin/users/:id', usersController.updateUser);

  // delete a user
  router.delete('/admin/users/:id', usersController.deleteUser);
}
