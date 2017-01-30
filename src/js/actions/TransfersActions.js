import dispatcher from '../dispatcher';

export function createTransfer(name, oldClub, newClub, money) {
  dispatcher.dispatch({
    type: 'CREATE_TRANSFER',
    name,
    oldClub,
    newClub,
    money
  });
}
