import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.scss";
export default class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
}
