import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";
import Shoppage from "../../pages/shoppage/Shoppage";
import Header from "../header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/shop" component={Shoppage} />
        </Switch>
      </div>
    );
  }
}

export default App;
