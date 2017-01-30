import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from './Header';
import Nav from './Nav';
import Table from './Table';
import NewTransf from './NewTransf';

export default class Last extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Table />
        <NewTransf />
      </div>
    );
  }
}
