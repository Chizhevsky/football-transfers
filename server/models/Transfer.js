var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransferSchema = new Schema({
  name    : {type: String, required: true},
  oldClub : {type: String, required: true},
  newClub : {type: String, required: true},
  money   : {type: String, required: true}
});

var Transfer = mongoose.model('Transfer', TransferSchema);
