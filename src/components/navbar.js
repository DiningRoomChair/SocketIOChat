import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
              <a className="navbar-brand" href="/">Home</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/admin">Admin Login</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
