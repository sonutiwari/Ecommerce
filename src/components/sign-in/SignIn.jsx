import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SIGN_IN_WITH_GOOGLE } from "../../firebase/firebase.utils";

import "./SignIn.scss";
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleGoogleAuth = (event) => {};
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
            id="password"
            label="Password"
            required
          />
          <div className="sign-in-buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={SIGN_IN_WITH_GOOGLE} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
