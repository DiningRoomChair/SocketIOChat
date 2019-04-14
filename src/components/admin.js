import React, { Component } from 'react'

export default class Admin extends Component {
  render() {
    return (
      <div>
        <h2>Administrative Functions</h2>
        <nav>
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
                <a className="nav-link" href="#">Event History</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Chat History</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Rooms</a>
            </li>
          </ul>
        </nav>
        <table>

        </table>
      </div>
    )
  }
}
