import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./PreviewCollection.scss";
const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...item }, index) => (
          <CollectionItem key={id} {...item} />
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);
