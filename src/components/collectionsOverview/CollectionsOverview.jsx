import React from "react";
import { createStructuredSelector } from "reselect";

import "./CollectionsOverview.scss";
import PreviewCollection from "../preview-collection/PreviewCollection";
import shopSelector from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <PreviewCollection
          key={collection.id}
          items={collection.items}
          title={collection.title}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopSelector,
});
export default connect(mapStateToProps)(CollectionsOverview);
