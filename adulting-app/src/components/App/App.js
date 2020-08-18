import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from '../Landing/Landing'
import Homepage from '../Homepage/Homepage';
import GameContainer from '../GameContainer/GameContainer'

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Homepage} />
        <Route path='/game' component={GameContainer} />
      </Switch>
    </div>
  );
}

export default App;
