import React, { Component } from 'react'
import Events from './events';
import Messages from './messages';
import Rooms from './rooms';

export default class Admin extends Component {

  constructor(props) {
    super(props);
    this.showEventsClick = this.showEventsClick.bind(this);
    this.showMessagesClick = this.showMessagesClick.bind(this);
    this.showRoomsClick = this.showRoomsClick.bind(this);
  }

  state = {
    subject: ""
  }

  showEventsClick(){
    this.setState({subject: "events"});
  }
  showMessagesClick(){
    this.setState({subject: "messages"});
  }
  showRoomsClick(){
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
      <div>
        <h2>Administrative Functions</h2>
        <nav>
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
                <button className="nav-link" onClick={this.showEventsClick}>
                  Event History
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" onClick={this.showMessagesClick}>
                  Chat History
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" onClick={this.showRoomsClick}>
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
