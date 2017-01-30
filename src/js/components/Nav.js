import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div id="navbar">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">FootballTransfers</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><Link class="link-rout" to="/">Last</Link></li>
                <li><Link class="link-rout" to="/new">New</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
