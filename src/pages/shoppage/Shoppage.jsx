import React from "react";
import ShopData from "../../data/ShopData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
export default class Shoppage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map((collection) => (
          <PreviewCollection
            key={collection.id}
            items={collection.items}
            title={collection.title}
          />
        ))}
      </div>
    );
  }
}
