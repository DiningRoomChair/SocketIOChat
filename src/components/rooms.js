import React, { Component } from 'react'
import axios from '../../../Hackathon/node_modules/axios';

export default class Rooms extends Component {

  state = {
      rooms: [],
      roomToCreate: {}
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
      </tr> 
    )
    return(rooms)
  }
  createRoom = () => {

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
            </tr>
          </thead>
          <tbody>
            {this.renderRooms()}
          </tbody>
        </table>
        <form>
          <h4>Create a Room</h4>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" />
            <label for="status">Status</label>
            <select className="form-control" id="status">
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
