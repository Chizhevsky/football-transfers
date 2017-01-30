import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from './Header';
import Nav from './Nav';
import NewTransf from './NewTransf';

export default class New extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <NewTransf />
      </div>
    );
  }
}
