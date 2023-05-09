import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import DetailVideogame from "./components/DetailVideogame/DetailVideogame";
import About from './components/About/About';
import axios from "axios"

axios.defaults.baseURL = "https://pi-videogames-main-zdjf-bzre5h700-tomaszucchi.vercel.app/";



function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/create'>
          <CreateVideogame />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/videogame/:id'>
          <DetailVideogame />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
