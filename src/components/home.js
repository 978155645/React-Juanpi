import React, { Component } from 'react';
import store from '../store';
import { increase } from '../actions/counter';

export default class Home extends Component {
  tryIt = () => {
    store.dispatch(increase());
  };

  render() {
    return (
      <div>
        Home
        <br />
        <button onClick={this.tryIt}>Dispatch</button>
      </div>
    )
  }
};
