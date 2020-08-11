import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CartIcon.scss";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { cartItemCountOutputSelector } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  itemCount: cartItemCountOutputSelector,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToprops, mapDispatchToProps)(CartIcon);
