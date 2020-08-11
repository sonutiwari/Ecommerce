import React from "react";
import { connect } from "react-redux";
import "./CollectionItem.scss";
import CustomButton from "../custom-button/CustomButton";
import { addItemInCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItemInCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">&#x20B9;{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemInCart(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemInCart: (item) => dispatch(addItemInCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
