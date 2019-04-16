import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

  state = {
    rooms: []
  }

  componentWillMount = () => {
    axios.get('http://localhost:4000/api/rooms')
      .then( ({data}) => {
        this.setState({rooms: data});
      })
      .catch(err => console.warn(err))
  }

  renderRoomChoices = () => {
    let rooms = this.state.rooms.map(room =>
      <option>{room.name}</option>
    )
    return(rooms);
  }

  render() {
    return (
      <div>
        <h2>Pick a Username and Room</h2>
        <form>
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <select className="form-control" id="room" required>
              {this.renderRoomChoices()}
            </select>
            <button type="submit" class="btn btn-primary">Start Chatting!</button>
        </form>
      </div>
    )
  }
}
