import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbars from './navbartodo.js';
// import Routes from './routes'
import Liste from './listetodo'
// import './App.css';

class App extends Component {
  

  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Navbars />
             
           <Liste 
                
               /> 
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
