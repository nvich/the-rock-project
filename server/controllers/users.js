const UserModel = require('../models/user');

exports.showUsers = (req, res) => {
  UserModel.find({}, (err, users) => {
    res.render('admin/users/users', {title: "Usuários", users: users});
  });
}

exports.showUser = (req, res) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.render('admin/users/user', {title: "Usuário", user: user});
  });
}

exports.updateUser = (req, res) => {
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
}

exports.deleteUser = (req, res) => {
  UserModel.remove({
    _id: req.params.id
  }, (err, user) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/users/user', {title: "Usuário", user: user, message: 'Usuário deletado'});
  });
}
