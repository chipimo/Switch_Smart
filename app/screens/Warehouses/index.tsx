import React = require("react");
import { connect } from "react-redux";

export const index = () => {
  return <div>warehouses</div>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
