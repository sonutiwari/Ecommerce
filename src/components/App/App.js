import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../header/Header";
import Homepage from "../../pages/homepage/Homepage";
import Shoppage from "../../pages/shoppage/Shoppage";
import AuthPage from "../../pages/authpage/AuthPage";
import {
  FIREBASE_AUTH,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import "./App.css";
import { setCurrentUser } from "../../redux/user/user.actions";

class App extends Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFirebase = FIREBASE_AUTH.onAuthStateChanged(
      async (user) => {
        if (user) {
          const userRef = await createUserProfileDocument(user);
          userRef.onSnapshot((snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        }
        setCurrentUser(user);
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
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/shop" component={Shoppage} />
          <Route
            exact={true}
            path="/auth"
            render={() =>
              this.props.currentUser ? <Redirect exact to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
