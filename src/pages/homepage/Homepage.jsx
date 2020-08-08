import React from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/Directory";
export default class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
