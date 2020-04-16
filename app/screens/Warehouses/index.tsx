import React = require("react");
import { connect } from "react-redux";
import { Label, Menu, Tab } from "semantic-ui-react";
import { Typography } from "@material-ui/core";
import Inventory from "./Inventory";

export const index = props => {
  const panes = [
    {
      menuItem: { key: "inventory", icon: "box", content: "Inventory Item" },
      render: () => (
        <Tab.Pane>
          <Inventory />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: "costs", icon: "money", content: "Costs" },
      render: () => <Tab.Pane>Tab 2</Tab.Pane>
    }
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        padding: 25,
        backgroundColor:
          props.Theme.theme === "light" ? "#E5E5E5" : "transparent"
      }}
    >
      <div
        style={{
          textAlign: "center",
          borderColor: "#ccc",
          borderWidth: 1,
          borderStyle: "solid",
          marginBottom: 15,
          padding: 10,
          backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121"
        }}
      >
        <Typography>Local Warehouse</Typography>
      </div>

      <div>
        <Tab panes={panes} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
