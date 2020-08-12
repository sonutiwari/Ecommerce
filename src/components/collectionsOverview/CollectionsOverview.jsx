import React from "react";
import { createStructuredSelector } from "reselect";

import "./CollectionsOverview.scss";
import PreviewCollection from "../preview-collection/PreviewCollection";
import shopSelector from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
const CollectionsOverview = ({ collections }) => {
  const keys = Object.keys(collections);
  return (
    <div className="collections-overview">
      {keys.map((key) => (
        <PreviewCollection
          key={collections[key].id}
          items={collections[key].items}
          title={collections[key].title}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopSelector,
});

export default connect(mapStateToProps)(CollectionsOverview);
