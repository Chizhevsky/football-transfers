import React from 'react';

export default class Table extends React.Component {
  render() {
    return (
      <div id="new-transf">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <form class="form-inline text-center">
                <div class="form-group col-sm-6 col-md-2 col-md-offset-1">
                  <label class="sr-only" for="name-input">Email address</label>
                  <input type="text" class="form-control" id="name-input" placeholder="Name" />
                </div>
                <div class="form-group col-sm-6 col-md-2">
                  <label class="sr-only" for="old-club-input">Password</label>
                  <input type="text" class="form-control" id="old-club-input" placeholder="Old Club" />
                </div>
                <div class="form-group col-sm-6 col-md-2">
                  <label class="sr-only" for="new-club-input">Password</label>
                  <input type="text" class="form-control" id="new-club-input" placeholder="New Club" />
                </div>
                <div class="form-group col-sm-6 col-md-2">
                  <label class="sr-only" for="money-input">Email address</label>
                  <input type="text" class="form-control" id="money-input" placeholder="Money" />
                </div>
                <button type="submit" class="btn col-sm-12 col-md-2">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
