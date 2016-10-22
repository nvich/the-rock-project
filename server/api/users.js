const User = require('../models/user');

// Users API
module.exports = (router) => {
  // get all users
  router.get('/users', function(req, res){
    User.find({}, function(err, users){
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  });

  // add a post
  router.post('/users', function(req, res){
    const user = new User();

    user.name     = req.body.name;
    user.email    = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err, user){
      if(err) {
        res.send(err);
      }
      res.json(user);
    })
  });

  // get a single user
  router.get('/users/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });

  // update a user
  router.put('/users/:id', function(req, res){
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
        res.json({ message: 'User atualizado' });
      })
    });
  });

  // delete a user
  router.delete('/users/:id', function(req, res){
    User.remove({
      _id: req.params.id
    }, function(err, user){
      if(err) {
        res.send(err);
      }
      res.json({ message: 'User deletado' });
    })
  });
}
