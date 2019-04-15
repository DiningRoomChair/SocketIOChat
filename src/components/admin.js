import React, { Component } from 'react'
import Events from './events';

export default class Admin extends Component {

  constructor(props) {
    super(props);
    this.showEvents = this.showEvents.bind(this);
    this.showMessages = this.showMessages.bind(this);
    this.showRooms = this.showRooms.bind(this);
  }

  state = {
    subject: ""
  }

  showEvents(){
    this.setState({subject: "events"});
  }
  showMessages(){
    this.setState({subject: "messages"});
  }
  showRooms(){
    this.setState({subject: "rooms"});
  }

  render() {
    let table;

    switch(this.state.subject){
      default:
        table = <Events />;
    }

    return (
      <div>
        <h2>Administrative Functions</h2>
        <nav>
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
                <button className="nav-link" >Event History</button>
            </li>
            <li className="nav-item">
                <button className="nav-link" >Chat History</button>
            </li>
            <li className="nav-item">
                <button className="nav-link" >Rooms</button>
            </li>
          </ul>
        </nav>
        {table}
      </div>
    )
  }
}
