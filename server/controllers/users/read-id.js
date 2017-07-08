const UserModel = require('../../models/user');

module.exports = function(req, res, next) {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.render('admin/users/user', {title: "Usuário", user: user});
  });
};
