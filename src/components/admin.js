import React, { Component } from 'react'
import Events from './events';
import Messages from './messages';
import Rooms from './rooms';

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
      case "events":
        table = <Events />
        break;
      case "messages":
        table = <Messages />
        break;
      case "rooms":
        table = <Rooms />
        break;
      default:
        table = <div></div>;
    }

    return (
      <div id="admincontent">
        <h2>Administrative Functions</h2>
        <nav>
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
                <button className="nav-link" onClick={this.showEvents}>
                  Event History
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" onClick={this.showMessages}>
                  Chat History
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" onClick={this.showRooms}>
                  Rooms
                </button>
            </li>
          </ul>
        </nav>
        {table}
      </div>
    )
  }
}
