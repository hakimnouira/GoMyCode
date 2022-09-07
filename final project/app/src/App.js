import React, { useEffect } from 'react';
import './App.css';
import Home from "./components/home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header/Header"
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import {useStateValue} from "./components/stateProvider/StateProvider"
import Sign_up from './components/sign_up/Sign_Up.js'
import Update from "./components/update/update"

function App() {

  const [{user}, dispatch] = useStateValue();

  

  console.log("USER IS >>>>>", user)



  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/sign_up">
            <Sign_up/>
          </Route>
          <Route path="/Update">
          <Update/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
