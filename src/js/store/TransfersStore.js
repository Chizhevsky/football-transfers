import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher';

class TransfersStore extends EventEmitter {
  constructor() {
    super();
    this.transfersStore = axios.get('http://localhost:3000/transfers');
  }
  getAll() {
    return this.transfersStore;
  }
  createTransfer(name, oldClub, newClub, money) {
    /*const id = Date.now();
    this.transfersStore.push({
      id,
      name,
      oldClub,
      newClub,
      money
    });*/
    axios.post('http://localhost:3000/transfers', {name: name, oldClub: oldClub, newClub: newClub, money: money})
    .then( function() {
        this.emit('change');
    }.bind(this))
    .catch( function(err) {
      console.log(err);
    } );
  }
  handleActions(action) {
    switch(action.type) {
      case 'CREATE_TRANSFER': {
        this.createTransfer(action.name, action.oldClub, action.newClub, action.money);
        break;
      }
    }
  }
}

const transfersStore = new TransfersStore;

dispatcher.register(transfersStore.handleActions.bind(transfersStore));

export default transfersStore;
