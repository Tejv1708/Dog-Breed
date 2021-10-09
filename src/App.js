import "./App.css";
import React, { useState, useEffect } from "react";
import DogImage from "./DogImage";
import DogImage2 from "./DogImage2";
import DogData from "./DogData";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/dogdata" component={DogData}></Route>
          <Route path="/dogImage" component={DogImage}></Route>
          <Route path="/dogImage2" component={DogImage2}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
