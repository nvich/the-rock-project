const UserModel = require('../../models/user');

module.exports = function(req, res, next) {
  UserModel.find({}, (err, users) => {
    res.render('admin/users/users', {title: "Usuários", users: users});
  });
};
