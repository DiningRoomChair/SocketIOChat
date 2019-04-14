import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Chat from './components/chat';
import AdminLogin from './components/adminlogin';
import Admin from './components/admin';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 id="pagetitle">Socket.io Chat</h1>
        <div className="content">
          <Router>
            <Route path='/' exact component={Home} />
            <Route path='/admin' exact component={AdminLogin} />

            <Route path='/chat' exact component={Chat} />
            <Route path='/adminhome' exact component={Admin} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
