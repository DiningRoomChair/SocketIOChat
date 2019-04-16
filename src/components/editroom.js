import React, { Component } from 'react';
import axios from 'axios';

export default class EditRoom extends Component {

  state = {
      name: "",
      status: "",
  }

  componentWillMount = () => {
      let urlID = window.location.href.split("/")[5];
      axios.get('http://localhost:4000/api/rooms')
      .then( ({data}) => {
        for(let room of data){
            console.log(room._id === urlID)
            if(room._id === urlID){
                this.setState({
                    name: room.name,
                    status: room.status
                })
            }
        }
      })
      .catch(err => console.warn(err))
  }

  editRoom = () => {

  }
  deleteRoom = () => {
      
  }

  render() {
    return (
      <div>
        <h4>Edit this Room</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name"
              value={this.state.name} required />
            <label htmlFor="status">Status</label>
            <select className="form-control" id="status" required>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.editRoom}>
            Create Room
          </button><br/>
          <button type="submit" className="btn btn-danger" onClick={this.deleteRoom}>
            DELETE ROOM
          </button>
        </form>
      </div>
    )
  }
}
