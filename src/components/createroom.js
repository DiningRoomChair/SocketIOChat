import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRoom extends Component {

  createRoom = (submit) => {
    submit.preventDefault();
    let roomName = document.getElementById('name').value;
    let roomStatus = document.getElementById('status').value.toLowerCase();

    axios.post('http://localhost:4000/api/rooms', {
      name: roomName,
      status: roomStatus
    })
      .then(response => {
        console.log(response);
        window.location.href = "/admin/home";
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h4>Create a Room</h4>
        <form>
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
