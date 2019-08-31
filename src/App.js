import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import CreateAccount from './components/CreateAccount';
import SignInForm from './components/SignInForm';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink
              to="/sign-in"
              activeClassName=" PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/create-account"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Create Account
            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink
              to="/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>{' '}
            or
            <NavLink
              exact
              to="/create-account"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Create Account
            </NavLink>
          </div>
          <Route exact path="/sign-in" component={SignInForm}></Route>
          <Route exact path="/create-account" component={CreateAccount}></Route>
          <Route exact path="/todo" component={TodoApp}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
