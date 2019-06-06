import React, { Component } from 'react';

class LoginForm extends Component {

    constructor() {
        super();
        console.log("[LoginForm] constructor");

        this.state = {
            email: '',
            password: ''
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

    componentDidMount() {
        console.log("[LoginForm] componentDidMount");
    }
    
    componentWillUnmount() {
        console.log("[LoginForm] componentWillUnmount");
    }

    onSubmit(e) {
        e.preventDefault();
    
        console.log('[LoginForm] onSubmit: ', this.state);

        var requestBody = {
            "userName" : this.state["email"],
            "password" : this.state["password"]
        }

        fetch("http://localhost:8080/api/user/auth", {
          method: "POST",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(requestBody)
        }).then((response) => {
            console.log(`[LoginForm] onSubmit - fetch.then(${response})`);
            this.props.history.push("/");    
        }).catch(function(error) {
            console.log(`[LoginForm] onSubmit - fetch.catch(${error})`);
        });
      } 
    

    render() {
        console.log("[LoginForm] render")
        return (
            <form onSubmit={this.onSubmit}>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">Email</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <button className="FormField__Button mr-20">Login</button>
                </div>
            </form>
        );
    }
    
}

export default LoginForm;