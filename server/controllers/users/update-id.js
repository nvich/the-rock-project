const UserModel = require('../../models/user');

module.exports = function(req, res, next) {
  UserModel.findById(req.params.id, (err, user) => {
    if(err) {
      res.send(err);
    }

    user.name     = req.body.name;
    user.email    = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save((err) => {
      if(err) {
        res.send(err);
      }
      res.render('admin/users/user', {title: "Usuário", user: user, message: 'Usuário atualizado'});
    })
  });
};
