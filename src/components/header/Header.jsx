import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { FIREBASE_AUTH } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { showCartOutputSelector } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./Header.scss";
const Header = ({ currentUser, showCart }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => FIREBASE_AUTH.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/auth" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {showCart ? <CartDropdown /> : null}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCart: showCartOutputSelector,
});
export default connect(mapStateToProps)(Header);
