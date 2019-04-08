import React from 'react';
import ReactDOM from 'react-dom';
import style from './main.css';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/home';
import About from './components/about';
import Counter from './components/counter';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Counter</NavLink>
              </li>
            </ul>
            <div>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/counter" component={Counter} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
