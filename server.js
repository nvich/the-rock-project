const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/the-rock', (err, database) => {
  if (err) {
    return console.log(err);
  }

  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  })
})

app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  db.collection('foods').find().toArray((err, result) => {
    if (err) {
      return console.log(err);
    }

    res.render('index/index.ejs', {foods: result})
  })
})
