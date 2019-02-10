import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Highlight from './components/Highlight'
import Multiplechoice from './components/Multiplechoice'
import Dashboard from './components/Dashboard'
import Performancetest from './components/Performancetest'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
   
 
      <Router>
         <div>
            <ul>
            <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/highlight">Highlight</Link></li>
              <li><Link to="/multiplechoice">Multiplechoice</Link></li>
              <li><Link to="/performancetest">Performancetest</Link></li>
            </ul>
    
    
    
              <Route exact path="/" component={Dashboard} />
              <Route path="/highlight" component={Highlight} />
              <Route path="/multiplechoice" component={Multiplechoice} />
              <Route path="/performancetest" component={Performancetest} />
 
          </div>
      </Router> 
     
    );
    
  }
  
}

export default App;
