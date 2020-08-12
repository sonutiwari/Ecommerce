import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  cartItemsOutputSelector,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./CheckoutPage.scss";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsOutputSelector,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);