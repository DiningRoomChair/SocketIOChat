import React, { Component } from 'react'
import axios from '../../../Hackathon/node_modules/axios';

export default class Rooms extends Component {

  state = {
      rooms: [],
  }

componentDidMount = () => {
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
        <td><a href={"editroom/" + room._id}>
          EDIT
        </a></td>
      </tr>
    )
    return(rooms)
  }

  render() {
    return (
      <div>
        <a href="createroom" id="createroomlink">
          CREATE A ROOM
        </a>
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
      </div>
    )
  }
}
