var mongoose = require('mongoose');

//require('../models/Transfer');
//var Transfer = mongoose.model('Transfer');

var Schema = mongoose.Schema;

var TransferSchema = new Schema({
  name    : {type: String, required: true},
  oldClub : {type: String, required: true},
  newClub : {type: String, required: true},
  money   : {type: String, required: true}
});

//var Transfer =
mongoose.model('Transfer', TransferSchema);

var Transfer = mongoose.model('Transfer');

exports.setUpConnection = function()  {
  mongoose.connect('mongodb://localhost/transfers');
}

exports.listTransfers = function() {
  return Transfer.find();
}

exports.createTransfer = function(data) {
  var transfer = new Transfer({
    name: data.name,
    oldClub: data.oldClub,
    newClub: data.newClub,
    money: data.money
  });

  return transfer.save();
}
