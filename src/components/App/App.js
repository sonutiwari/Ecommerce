import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/Header";
import Homepage from "../../pages/homepage/Homepage";
import Shoppage from "../../pages/shoppage/Shoppage";
import AuthPage from "../../pages/authpage/AuthPage";
import {
  FIREBASE_AUTH,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
    this.unSubscribeFirebase = null;
  }

  componentDidMount() {
    this.unSubscribeFirebase = FIREBASE_AUTH.onAuthStateChanged(
      async (user) => {
        if (user) {
          const userRef = await createUserProfileDocument(user);
          userRef.onSnapshot((snapshot) => {
            this.setState(
              {
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data(),
                },
              },
              () => {
                console.log("State: ", this.state);
              }
            );
          });
        }
        this.setState({ currentUser: user });
      }
    );
  }

  componentWillUnmount() {
    if (this.unSubscribeFirebase) {
      this.unSubscribeFirebase();
    }
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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
