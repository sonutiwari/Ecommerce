import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import directorySelector from "../../redux/directory/directory.selector";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: directorySelector,
});
export default connect(mapStateToProps)(Directory);
