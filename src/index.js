import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Driversignup from './Driversignup';
import Driverlogin from './Driverlogin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/driversignup' element={<Driversignup/>}/>
      <Route path='/driverlogin' element={<Driverlogin/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);
