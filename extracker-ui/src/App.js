import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
      super();

      this.state = {
          email: '',
          password: '',
          firstName: '',
          surname: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
      let target = e.target;
      let value = target.value;
      let name = target.name;

      this.setState({
        [name]: value
      });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);

    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(this.state)
    });
  } 

  render() {
    return (
      <div className="App">
        <h1>Expences Traker</h1>

        <div>
          <form onSubmit={this.onSubmit}>
              <div className="FormField">
                  <label className="FormField__Label" htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" className="FormField__Input" placeholder="Enter your first name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <label className="FormField__Label" htmlFor="surname">Surname</label>
                  <input type="text" id="surname" className="FormField__Input" placeholder="Enter your surname" name="surname" value={this.state.surname} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button>
              </div>
          </form>
        </div>  

      </div>
    );
  }
}

export default App;
