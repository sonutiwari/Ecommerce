import React, { Component } from "react";
import Homepage from "../../pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shoppage from "../../pages/shoppage/Shoppage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/shop" component={Shoppage} />
        </Switch>
      </div>
    );
  }
}

export default App;
