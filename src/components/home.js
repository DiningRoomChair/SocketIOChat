import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Pick a Username and Room</h2>
        <form>
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <button type="submit" class="btn btn-primary">Start Chatting!</button>
        </form>
      </div>
    )
  }
}
