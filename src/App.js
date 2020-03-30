import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/login/Login';
import SearchPlaces from './components/searchplaces/SearchPlaces';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ Login }></Route>
          <Route path="/search" exact component={ SearchPlaces }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
