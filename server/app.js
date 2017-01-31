var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./utils/DataBaseUtils');

db.setUpConnection();

var app = express();

app.use( bodyParser.json() );

app.get('/transfers', function(req, res) {
  /*db.listTransfers().then( function (data) {
    res.send(data);
  });*/
  res.send('Hello world');
});

app.post('/transfers', function (req, res) {
  db.createNote(req.body).then( function(data) {
    res.send(data);
  });
})

var server = app.listen(8080, function() {
  console.log('Server is up and running on port 8080');
})
