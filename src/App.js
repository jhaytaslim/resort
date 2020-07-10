import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch}  from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/rooms"  component={Rooms}/>
        <Route exact path="/rooms/:slug"  component={SingleRoom}/>
        <Route exact component={Error}/>
    </Switch>
      

    </>
  );
}

export default App;
