//=========App.js file=========

//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
//components
import LoginPage from './Components/LoginPage/LoginPage';
import Footer from './Components/Footer/Footer';
//includes
import './App.css';

//Run
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            {
              <LoginPage />
            }
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
