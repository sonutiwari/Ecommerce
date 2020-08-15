import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  cartItemsOutputSelector,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./CheckoutPage.scss";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: &#x20B9;{total}</span>
      </div>
      <p className="card-info">
        <span>
          It is a test only so Please use <strong>4242 4242 4242 4242</strong>{" "}
          ------ <strong>CVV-123</strong> ----{" "}
          <strong>Expiry-Any date after Today. tomorrows date will do.</strong>
        </span>
      </p>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsOutputSelector,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
