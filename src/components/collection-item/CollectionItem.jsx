import React from "react";
import "./CollectionItem.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">&#x20B9;{price}</span>
    </div>
  </div>
);

export default CollectionItem;
