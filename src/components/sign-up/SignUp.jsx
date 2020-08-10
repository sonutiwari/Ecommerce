import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
  FIREBASE_AUTH,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import "./SignUp.scss";
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await FIREBASE_AUTH.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
    } catch (err) {
      console.error(err.message);
    } finally {
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      document.getElementById("sign-up-form").reset();
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form onSubmit={this.handleSubmit} id="sign-up-form">
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            id="displayName"
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
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
            value={this.state.password}
            autoComplete="password"
            handleChange={this.handleChange}
            id="password"
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            autoComplete="confirm password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            id="confirmPassword"
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
