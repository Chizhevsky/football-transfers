import React from 'react';

import Nav from './Nav';
import Table from './Table';
import NewTransf from './NewTransf';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <header>
          <div class="container">
            <div class="row text-center">
              <div class="col-sm-12 col-md-8 col-md-offset-2">
                <i class="fa fa-handshake-o fa-5x"></i>
                <h1>Last transfers from all football leagues</h1>
              </div>
            </div>
          </div>
        </header>
        <Table />
        <NewTransf />
      </div>
    );
  }
}
