import React, { Component } from 'react';
import axios from 'axios';
import Admin from './admin';

export default class AdminLogin extends Component {

  constructor(props) {
    super(props);
    this.adminLogin = this.adminLogin.bind(this);
  }

  state = {
    loggedin: false
  }

  adminLogin = (submit) => {
    submit.preventDefault();
    let adminUsername = document.getElementById('username').value.toLowerCase();
    let adminPassword = document.getElementById('password').value;

    axios.get('http://localhost:4000/api/admins')
      .then( (admins) => {
        for(let admin of admins.data){
          if(adminUsername === admin.username.toLowerCase() &&
             adminPassword === admin.password){
            window.location.href = "/admin/home";
            break;
          }
          document.getElementById('warning').innerHTML = "Incorrect username or password";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let content;

    if(this.state.loggedin){
      content = <Admin />
    }
    else{
      content = <div id="admincontent">
        <h2>Login as an Administrator</h2>
        <p id="warning"></p>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" required />
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.adminLogin}>
            Login
          </button>
        </form>
      </div>
    }
    
    return(content)
  }
}
