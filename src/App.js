import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import { Route, Switch } from "react-router-dom";
import axios from "axios"
import PrivateRoute from "./Components/PrivateRoute";
import AuthState from "./Context/authState";

if(localStorage.token){
  axios.defaults.headers.common["x-auth-token"]= localStorage.token;
}
function App() {
  return (
    <AuthState>
    <div className="cover">
      <div className="overlay">
        <div className="header">
          <h1>Welcome to Gwachukwu's Bank</h1>
          <h3>Your money is safe with us</h3>
        </div>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Home} />
        </Switch>
      </div>
    </div>
    </AuthState>
  );
}

export default App;
