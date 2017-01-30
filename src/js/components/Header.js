import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
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
    );
  }
}
