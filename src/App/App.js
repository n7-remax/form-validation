import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'
import Support from './Support/Support';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Support/>
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/forgot-password" render={() => <ForgotPassword />} />
    </div>
  );
}

export default App;
