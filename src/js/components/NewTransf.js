import React from 'react';

import * as TransfersActions from '../actions/TransfersActions.js';

export default class Table extends React.Component {
  constructor() {
    super();
    this.inputsValue = {
      name: "",
      oldClub: "",
      newClub: "",
      money: ""
    };
  }
  createTransfer () {
    const v = this.inputsValue;
    TransfersActions.createTransfer(v.name, v.oldClub, v.newClub, v.money);
  }
  changeName(e) {
    this.inputsValue.name = e.target.value;
  }
  changeOClub(e) {
    this.inputsValue.oldClub = e.target.value;
  }
  changeNClub(e) {
    this.inputsValue.newClub = e.target.value;
  }
  changeMoney(e) {
    this.inputsValue.money = e.target.value;
  }
  render() {
    return (
      <div id="new-transf">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <form class="form-inline text-center">
                <div class="form-group col-sm-6 col-md-2 col-md-offset-1">
                  <label class="sr-only" for="name-input">Email address</label>
                  <input type="text" class="form-control" id="name-input" placeholder="Name" onChange={this.changeName.bind(this)} />
                </div>
                <div class="form-group col-sm-6 col-md-2">
                  <label class="sr-only" for="old-club-input">Password</label>
                  <input type="text" class="form-control" id="old-club-input" placeholder="Old Club" onChange={this.changeOClub.bind(this)} />
                </div>
                <div class="form-group col-sm-6 col-md-2">
                  <label class="sr-only" for="new-club-input">Password</label>
                  <input type="text" class="form-control" id="new-club-input" placeholder="New Club" onChange={this.changeNClub.bind(this)} />
                </div>
                <div class="form-group col-sm-6 col-md-2">
                  <label class="sr-only" for="money-input">Email address</label>
                  <input type="text" class="form-control" id="money-input" placeholder="Money" onChange={this.changeMoney.bind(this)} />
                </div>
                <div class="col-sm-12 col-md-2 col-lg-2"><button onClick={this.createTransfer.bind(this)} type="button" class="btn">SEND</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
