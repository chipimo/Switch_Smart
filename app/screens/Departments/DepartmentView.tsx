import React = require("react");
import { connect } from "react-redux";
import { Label, Menu, Tab } from "semantic-ui-react";
import { Button } from "@material-ui/core";

export const DepartmentView = () => {
  const panes = [
    {
      menuItem: { key: "department", icon: "sitemap", content: "Departments" },
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
    },
    {
      menuItem: { key: "users", icon: "users", content: "Users" },
      render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
    },
    {
      menuItem: (
        <Menu.Item key="messages">
          Notifications<Label>15</Label>
        </Menu.Item>
      ),
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
    }
  ];

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div
        style={{
          width: "80%",
          padding: 10
        }}
      >
        <Tab panes={panes} /> 















































































































































































































































































































        
      </div>
      <div style={{ width: "20%" }}>
        <Button style={{ width: "100%" }}>New Department</Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentView);
