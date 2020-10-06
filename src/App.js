import React from "react";
// import Navbar from "./Navbar";
import Product from "./Connecters/ProductConnect.js";
// import Posts from "./Connecters/PostsConnect.js";
import Home from "./Connecters/HomeConnect.js";
import Navbar from "./Connecters/NavbarConnect.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/:id" component={Product} />
        </Switch>
      </div>
    );
  }
}
export default App;
