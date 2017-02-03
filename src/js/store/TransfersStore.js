import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher';

class TransfersStore extends EventEmitter {
  constructor() {
    super();
    this.transfersStore = axios.get('http://localhost:3000/transfers'); /*[
      {
        id: 123456789,
        name: 'Ozil',
        oldClub: 'Real Madrid',
        newClub: 'Arsenal',
        money: '35 000 000'
      },
      {
        id: 123456987,
        name: 'Alexis Sanches',
        oldClub: 'Barcelona',
        newClub: 'Arsenal',
        money: '30 000 000'
      },
      {
        id: 987654321,
        name: 'Petr Cech',
        oldClub: 'Chelsea',
        newClub: 'Arsenal',
        money: '7 000 000'
      }
    ];*/
  }
  getAll() {
    return this.transfersStore;
  }
  createTransfer(name, oldClub, newClub, money) {
    const id = Date.now();
    this.transfersStore.push({
      id,
      name,
      oldClub,
      newClub,
      money
    });
    this.emit('change');
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
