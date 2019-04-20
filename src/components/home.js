import React, { Component } from 'react';
import axios from 'axios';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000');

var discussion = document.getElementById("discussion");
var feedback = document.getElementById("feedback");

export default class Home extends Component {

  constructor(props){
    super(props);
    this.renderMessageHistory = this.renderMessageHistory.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  state = {
    rooms: [],
    messageHistory: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:4000/api/rooms')
      .then( ({data}) => {
        this.setState({rooms: data});
      })
      .catch(err => console.warn(err));
  }

  submitUser = event => {
    event.preventDefault();

    let username = document.getElementById("username");
    let room = document.getElementById("room");
    let userFormArea = document.getElementById("userFormArea");
    let messageArea = document.getElementById("messageArea");

    if(username.value === ""){
        alert("Pick a Username");
        return false;
    }
    
    socket.emit("joinRoom", {socket_id: socket.id,username: username.value, room: room.value},(data)=>{
      if(data){
        userFormArea.style.display = "none";
        messageArea.style.display = "block";
        //send event to DB
        axios.post('http://localhost:4000/api/events', {
          socket_id: socket.id,
          username: username.value,
          room: room.value,
          action: `${username.id} chose ${username.value} as name and Logged in room ${room.value}`
        })
          .then( response => {
            console.log(response);
          })
          .catch( error => {
            console.log(error);
          });
        }
    });
    axios.post('http://localhost:4000/api/roomhistory', {room: room.value})
      .then(({data}) => {
        let messages = [];
        for(let event of data){
          messages.push({username: event.username, message: event.message});
        }
        this.setState({messageHistory: messages});
        console.log(this.state.messageHistory);
      })
      .catch(err => console.warn(err));
  };
  submitMessage = event => {
    event.preventDefault();

    let username = document.getElementById("username");
    let room = document.getElementById("room");
    var message = document.getElementById("message");
    let feedback = document.getElementById("feedback");
    let discussion = document.getElementById("discussion");

    socket.emit("chat", {
        msg: message.value,
        user: username.value,
        room: room.value
    });

    feedback.innerHTML = "";
    discussion.innerHTML += "<p>" + username.value + ": " + message.value + "</p>";
    discussion.scrollTop = discussion.scrollHeight;
    //send message to DB
    axios.post('http://localhost:4000/api/messages', {
        socket_id: socket.id,
        username: username.value,
        room: room.value,
        message: message.value
      })
      .then(response => {
        console.log(response);
        let messages = this.state.messageHistory;
        messages.push({username: username.value, message: message.value});
        this.setState({messageHistory: messages});
      })
      .catch(function (error) {
        console.log(error);
      });
    message.value = "";
  };

  renderRoomChoices = () => {
    let rooms = this.state.rooms.map(room =>
      <option>{room.name}</option>
    )
    return(rooms);
  }
  renderMessageHistory = () => {
    let messageHistory = this.state.messageHistory.map(message => 
      <p>{message.username}: {message.message}</p>
    );
    return(messageHistory);
  }

  render() {
    return (
      <div>
        <div id="userFormArea">
          <h2>Pick a Username and Room</h2>
          <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <select className="form-control" id="room" required>
                {this.renderRoomChoices()}
              </select>
              <button type="submit" className="btn btn-primary" onClick={this.submitUser}>
                Start Chatting!
              </button>
          </form>
        </div>
        <div id="messageArea" className="row">
            <div className="col-md-8">
                <div id="discussion">{this.renderMessageHistory()}</div>
                <div id="feedback"></div>
                <form id="messageForm">
                    <div className="formGroup">
                        <label>Enter Message</label>
                        <input placeholder="type your message" id="message" />
                        <br/>
                        <button type="submit" className="btn btn-primary" onClick={this.submitMessage} >
                          Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
