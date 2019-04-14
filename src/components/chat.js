import React, { Component } from 'react'

export default class Chat extends Component {
  render() {
    return (
      <div id="messageArea" class="row">
        <div class="col-md-8">
          <div id="discussion"></div>
          <div id="feedback"></div>
          <form id="messageForm">
            <div class="form-group">
              <label for="message">Enter Message</label>
              <input className="form-control" placeholder="type your message" id="message" />
            </div>
            <button class="btn btn-primary" type="submit" id="send">Send Message</button>
          </form>
        </div>
        <div class="col-md-4">
          <div class="well">
            <h5>Online Users</h5>
            <ul class="list-group" id="users"></ul>
          </div>
        </div>
      </div>
      )
    }
  }
  