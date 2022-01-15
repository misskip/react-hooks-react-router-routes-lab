import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import data from '../data';




function App() {
 
  return (
    <BrowserRouter>

      <Route path ="/NavBar">
        <NavBar />
      </Route>

      <Route exact path  ="/">
        <Home />
      </Route>
      
      <Route path ="/Movies">
        <Movies />
      </Route>
    
      <Route path ="/Directors">
        <Directors />
      </Route>

      <Route path ="/Actors">
        <Actors />
      </Route>
    </BrowserRouter>
)} 
export default App;
