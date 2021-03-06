import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import ExpenceList from './pages/expences/ExpenceList';
import RegistrationForm from './pages/account/RegistrationForm';
import LoginForm from './pages/account/LoginForm';
import Notfound from './pages/common/NotFound';
import ExpenseDetails from './pages/expences/ExpenseDetails';

class App extends Component {

  constructor() {
      super();
      console.log("[App] constructor");
  }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

  componentWillUnmount() {
    console.log("[App] componentWillUnmount");
  }

  render() {
    console.log("[App] render");
    
    return (
      <Router>
      <div className="App">
        <h1>Expences Traker</h1>
        <div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={ExpenceList} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <Route path='/expense/:expenseId' component={ExpenseDetails} />
          <Route component={Notfound} />          
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
