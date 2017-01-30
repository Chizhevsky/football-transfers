import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Last from './Last';
import New from './New';

export default class Layout extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Last} />
        <Route path="/new" component={New} />
      </Router>
    );
  }
}
