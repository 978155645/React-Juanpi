import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

class About extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        About
        <br />
        Counter:{counter}
      </div>
    )
  }
}

export default connect(mapStateToProps)(About);
