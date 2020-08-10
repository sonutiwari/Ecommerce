import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { FIREBASE_AUTH } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import "./Header.scss";
const Header = ({ currentUser, showCart }) => (
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
        <Link
          to="/auth"
          className="option"
          onClick={() => FIREBASE_AUTH.signOut()}
        >
          SIGN OUT
        </Link>
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
const mapStateToProps = ({ user: { currentUser }, cart: { showCart } }) => ({
  currentUser,
  showCart,
});
export default connect(mapStateToProps)(Header);
