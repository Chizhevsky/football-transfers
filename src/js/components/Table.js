import React from 'react';

export default class Table extends React.Component {
  render() {
    return (
      <div id="table-transfers">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <table class="table">
                <tr>
                  <th>Name</th>
                  <th>Old club</th>
                  <th>New club</th>
                  <th>Money $</th>
                </tr>
                <tr>
                  <td>Ozil</td>
                  <td>Real Madrid</td>
                  <td>Arsenal</td>
                  <td>35 000 000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
