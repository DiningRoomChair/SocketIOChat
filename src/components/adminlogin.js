import React, { Component } from 'react'

export default class AdminLogin extends Component {
  render() {
    return (
      <div>
        <h2>Login as an Administrator</h2>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" id="username" />
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}
