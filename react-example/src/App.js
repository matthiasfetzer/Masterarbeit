import React, { Component } from 'react';

import './App.css';
import Highlight from './components/Highlight'
import Multiplechoice from './components/Multiplechoice'
import Dashboard from './components/Dashboard'
import Performancetest from './components/Performancetest'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
   
      
      <Router>
         <div>
           <hr />
              <Link to="/">Dashboard</Link>
              <Link to="/highlight">Highlight</Link>
              <Link to="/multiplechoice">Multiplechoice</Link>
              <Link to="/performancetest">Performancetest</Link>
            <hr />    
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
