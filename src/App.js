import React from "react";
import Navbar from "./Navbar";
import Product from "./Connecters/ProductConnect.js";
// import Posts from "./Connecters/PostsConnect.js";
import Home from "./Connecters/HomeConnect.js";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/:id" component={Product} />
        </Switch>
      </div>
    );
  }
}
export default App;
