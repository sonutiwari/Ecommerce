import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
  SIGN_IN_WITH_GOOGLE,
  FIREBASE_AUTH,
} from "../../firebase/firebase.utils";

import "./SignIn.scss";
import { setCurrentUser } from "../../redux/user/user.actions";
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await FIREBASE_AUTH.signInWithEmailAndPassword(email, password);
      setCurrentUser({ email });
      document.getElementById("sign-in-form").reset();
    } catch (err) {
      console.error(err.message);
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit} id="sign-in-form">
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            id="email"
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            autoComplete="password"
            value={this.state.password}
            handleChange={this.handleChange}
            id="password"
            label="Password"
            required
          />
          <div className="sign-in-buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={SIGN_IN_WITH_GOOGLE}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
