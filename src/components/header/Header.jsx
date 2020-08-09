import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { FIREBASE_AUTH } from "../../firebase/firebase.utils";
import "./Header.scss";
const Header = ({ currentUser }) => (
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
      <Link to="/cart" className="option">
        Cart
      </Link>
    </div>
  </div>
);
export default Header;
