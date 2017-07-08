const UserModel = require('../../models/user');

module.exports = function(req, res, next) {
  const user = new UserModel();

  user.name     = req.body.name;
  user.email    = req.body.email;
  user.username = req.body.username;
  user.password = req.body.password;

  user.save((err, user) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/users/cadastre', {title: "Usuário", user: user, message: 'Usuário criado'});
  });
};
