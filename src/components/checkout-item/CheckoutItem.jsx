import React from "react";
import { connect } from "react-redux";
import "./CheckoutItem.scss";
import {
  removeItemFromCart,
  decreaseItemQuantity,
  addItemInCart,
} from "../../redux/cart/cart.actions";
const CheckoutItem = ({
  cartItem,
  removeItem,
  decreaseQuantity,
  addQuantity,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="product" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            return quantity === 1
              ? removeItem(cartItem)
              : decreaseQuantity(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addQuantity(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  decreaseQuantity: (item) => dispatch(decreaseItemQuantity(item)),
  addQuantity: (item) => dispatch(addItemInCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
