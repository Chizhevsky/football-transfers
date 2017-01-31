import mongoose from 'mongoose';

import '../models/Transfer';

const Transfer = mongoose.model('Transfer');

export function setUpConnection() {
  mongoose.connect('mongodb://localhost:27017/transfers');
}

export function listTransfers() {
  return Transfer.find();
}

export function createTransfer(data) {
  const transfer = new Transfer({
    name: data.name,
    oldClub: data.oldClub,
    newClub: data.newClub,
    money: data.money
  });

  return transfer.save();
}
