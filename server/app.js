var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./utils/DataBaseUtils'),
  cors = require('cors');

db.setUpConnection();

var app = express();

app.use( bodyParser.json() );

app.use(cors({ origin: '*' }));

app.get('/transfers', function(req, res) {
  db.listTransfers().then( function(data) {
    console.log(data);
    res.send(data);
  });
});

app.post('/transfers', function (req, res) {
  db.createTransfer(req.body).then( function(data) {
    res.send(data);
  });
})

var server = app.listen(3000, function() {
  console.log('Server is up and running on port 3000');
})
