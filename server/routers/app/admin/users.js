const User = require('../../../models/user');
// Users
module.exports = (router) => {
  // get all users
  router.get('/admin/users', function(req, res){
    User.find({}, function(err, users){
      res.render('admin/users/users', {title: "Usuários", users: users});
    });
  });

  // get a single user
  router.get('/admin/users/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
      if (err) {
        res.send(err);
      }
      res.render('admin/users/user', {title: "Usuário", user: user});
    });
  });

  // update a user
  router.put('/admin/users/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
      if(err) {
        res.send(err);
      }

      user.name     = req.body.name;
      user.email    = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;

      user.save(function(err){
        if(err) {
          res.send(err);
        }
        res.render('admin/users/user', {title: "Usuário", user: user, message: 'Usuário atualizado'});
      })
    });
  });

  // delete a user
  router.delete('/admin/users/:id', function(req, res){
    User.remove({
      _id: req.params.id
    }, function(err, user){
      if(err) {
        res.send(err);
      }
      res.render('admin/users/user', {title: "Usuário", user: user, message: 'Usuário deletado'});
    })
  });
}
