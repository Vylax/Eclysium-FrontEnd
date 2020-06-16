import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


/*
    ! WARNING: Using the module: hot-loader creates warnings in console.  
*/
import {hot} from "react-hot-loader";
import "./app.sass";
import Header from "./components/Shared/Header"
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Login from "./components/pages/Access"

function App () {
    
    return <Router>
        <Header />
        <Switch>
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/" component={ Home } />
            {/* <Route component={ 404 } /> */}
        </Switch>
    </Router>
}

export default hot(module)(App);
// export default App;