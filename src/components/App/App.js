import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import Homepage from "../../pages/homepage/Homepage";
import Shoppage from "../../pages/shoppage/Shoppage";
import AuthPage from "../../pages/authpage/AuthPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/shop" component={Shoppage} />
          <Route exact={true} path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
