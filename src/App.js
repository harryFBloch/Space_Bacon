import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import SideSocialNav from './components/SideSocialNav';
import Home from './pages/Home';
import Audio from './pages/Audio';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <SideSocialNav />
      <Switch>
        <Route exact path="/Audio" >
          <Audio />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/#">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
