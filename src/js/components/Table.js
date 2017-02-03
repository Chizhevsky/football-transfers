import React from 'react';

import transfersStore from '../store/TransfersStore';

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      transfers: transfersStore.getAll(),
    }
  }
  componentWillMount() {
    transfersStore.on('change', () => {
      this.setState({
        transfers: transfersStore.getAll(),
      });
    });
  }
  componentWillUnmount() {
    TodoStore.removeListener("change", () => {
      this.setState({
        transfers: transfersStore.getAll(),
      });
    });
  }
  render() {
    const { transfers } = this.state;

    const transfersTR = transfers.map( (trans) => {
      return (
        <tr key={trans.id}>
          <td>{ trans.name }</td>
          <td>{ trans.oldClub }</td>
          <td>{ trans.newClub }</td>
          <td>{ trans.money }</td>
        </tr>
      );
    });

    return (
      <div id="table-transfers">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <table class="table text-center">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Old club</th>
                    <th>New club</th>
                    <th>Money $</th>
                  </tr>
                  { transfersTR }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
