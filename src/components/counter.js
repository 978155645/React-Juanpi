import React from 'react';
import style from '../main.css';
import { connect } from 'react-redux';
import { increase, decrease, fetchList } from '../actions/counter';

const mapStateToProps = state => {
  return {
    counter: state.counter,
    counter1: state.counter1,
    lists: state.lists,
    total: state.total
  };
};

class Counter extends React.Component {
  render() {
    const {counter,counter1,lists,increase,decrease,fetchList} = this.props;

    if (!lists) {
      return <li>暂无数据</li>;
    }

    var jsx = [];
    for (var i = 0; i < lists.length; i++) {
      jsx.push(<li key={i}>{lists[i].title}</li>);
    }

    return (
      <div>
        Counter:{counter}
        <br />
        Counter1:{counter1}
        <br />
        {jsx}
        <br />
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchList();
  }
}

const CounterContainer = connect(mapStateToProps,{ increase, decrease, fetchList })(Counter);

export default CounterContainer;
