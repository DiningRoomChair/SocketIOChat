import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Chat from './components/chat';
import AdminLogin from './components/adminlogin';
import Admin from './components/admin';
import CreateRoom from './components/createroom';
import EditRoom from './components/editroom';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 id="pagetitle">Socket.io Chat</h1>
        <div className="content">
          <Router>
            <Route path='/' exact component={Home} />
            <Route path='/chat' exact component={Chat} />
            
            <Route path='/admin' exact component={AdminLogin} />
            <Route path='/admin/home' exact component={Admin} />
            <Route path='/admin/createroom' exact component={CreateRoom} />
            <Route path='/admin/editroom/:id' exact component={EditRoom} />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
