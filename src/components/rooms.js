import React, { Component } from 'react'
import axios from '../../../Hackathon/node_modules/axios';

export default class Rooms extends Component {

  state = {
      rooms: [],
  }

  componentWillMount = () => {
    axios.get('http://localhost:4000/api/rooms')
      .then( ({data}) => {
        this.setState({rooms: data});
      })
      .catch(err => console.warn(err))
  }

  renderRooms = () => {
    let rooms = this.state.rooms.map(room =>
      <tr>
        <td>{room._id}</td>
        <td>{room.name}</td>
        <td>{room.status}</td>
        <td><button type="submit" class="btn btn-primary">EDIT</button></td>
      </tr> 
    )
    return(rooms)
  }
  createRoom = (submit) => {
    submit.preventDefault();
    let roomName = document.getElementById('name').value;
    let roomStatus = document.getElementById('status').value.toLowerCase();

    axios.post('http://localhost:4000/api/rooms', {
      name: roomName,
      status: roomStatus
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Room ID</th>
              <th>Name</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderRooms()}
          </tbody>
        </table>
        <form>
          <h4>Create a Room</h4>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" required />
            <label htmlFor="status">Status</label>
            <select className="form-control" id="status" required>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.createRoom}>
            Create Room
          </button>
        </form>
      </div>
    )
  }
}
