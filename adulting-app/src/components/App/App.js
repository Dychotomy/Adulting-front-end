import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Landing from '../Landing/Landing'
import Homepage from '../Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
