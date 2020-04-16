import React = require("react");
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Icon } from "semantic-ui-react";
import SideList from "../Products/SideList";
import ProductList from "../Products/List";
import Inventory from "../Inventory";
import InvSideView from "../Inventory/InvSideView";
import Price_List_Editor from "../Products/Price_List_Editor";

const SideSwitchView = (props) => {
  switch (props.view) {
    case "products":
      return <SideList />;
      break;
    case "inventory":
      return <InvSideView />;
      break;

    default:
      return null;
      break;
  }
};

const MainSwitchView = (props) => {
  switch (props.view) {
    case "product_list":
      return <ProductList />;
      break;
    case "Price_List_Editor":
      return <Price_List_Editor />;
      break;
    case "Price_Group":
      return <Price_List_Editor />;
      break;

    default:
      return null;
      break;
  }
};

const index = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(10);
  const [view, setView] = React.useState("");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 0) {
      setView("products");
    } else if (index === 1) {
      setView("inventory");
    }
  };

  return (
    <div
      style={{
        width: "99%",
        height: "85vh",
        display: "flex",
        justifyContent: "space-between",
        padding: 8,
      }}
    >
      <div
        style={{
          width: "22%",
          borderWidth: 1,
          borderColor: props.Theme.theme === "light" ? "#929292" : "#CECECE",
          borderStyle: "solid",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: 5,
          }}
        >
          <Typography>{props.SettingViews.title}</Typography>
        </div>
        <Divider />
        <div style={{ height: "35vh" }}>
          <SideSwitchView view={view} />
        </div>
        <div>
          <List component="nav" aria-label="main mailbox folders">
            <Divider />
            <ListItem
              style={{ height: 38 }}
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <Icon
                  style={{
                    color:
                      props.Theme.theme === "light"
                        ? selectedIndex === 0
                          ? "#A45C06"
                          : "#040302"
                        : "#fff",
                  }}
                  name="box"
                />
              </ListItemIcon>
              <ListItemText
                style={{
                  color:
                    props.Theme.theme === "light"
                      ? selectedIndex === 0
                        ? "#F78A09"
                        : "#040302"
                      : "#fff",
                }}
                primary="Products"
              />
            </ListItem>
            <Divider />
            <ListItem
              style={{ height: 38 }}
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <Icon
                  style={{
                    color:
                      props.Theme.theme === "light"
                        ? selectedIndex === 1
                          ? "#A45C06"
                          : "#040302"
                        : "#fff",
                  }}
                  name="clone"
                />
              </ListItemIcon>
              <ListItemText
                style={{
                  color:
                    props.Theme.theme === "light"
                      ? selectedIndex === 1
                        ? "#A45C06"
                        : "#040302"
                      : "#fff",
                }}
                primary="Inventory"
              />
            </ListItem>
            <Divider />
            <ListItem
              style={{ height: 38 }}
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <Icon
                  style={{
                    color:
                      props.Theme.theme === "light"
                        ? selectedIndex === 2
                          ? "#A45C06"
                          : "#040302"
                        : "#fff",
                  }}
                  name="book"
                />
              </ListItemIcon>
              <ListItemText
                style={{
                  color:
                    props.Theme.theme === "light"
                      ? selectedIndex === 2
                        ? "#A45C06"
                        : "#040302"
                      : "#fff",
                }}
                primary="Tickets"
              />
            </ListItem>
            <Divider />
            <ListItem
              style={{ height: 38 }}
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <Icon
                  style={{
                    color:
                      props.Theme.theme === "light"
                        ? selectedIndex === 3
                          ? "#A45C06"
                          : "#040302"
                        : "#fff",
                  }}
                  name="calculator"
                />
              </ListItemIcon>
              <ListItemText
                style={{
                  color:
                    props.Theme.theme === "light"
                      ? selectedIndex === 3
                        ? "#A45C06"
                        : "#040302"
                      : "#fff",
                }}
                primary="Accounts"
              />
            </ListItem>
            <Divider />
            <ListItem
              style={{ height: 38 }}
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <Icon
                  style={{
                    color:
                      props.Theme.theme === "light"
                        ? selectedIndex === 4
                          ? "#A45C06"
                          : "#040302"
                        : "#fff",
                  }}
                  name="barcode"
                />
              </ListItemIcon>
              <ListItemText
                style={{
                  color:
                    props.Theme.theme === "light"
                      ? selectedIndex === 4
                        ? "#A45C06"
                        : "#040302"
                      : "#fff",
                }}
                primary="Entities"
              />
            </ListItem>
            <Divider />
            <ListItem
              style={{ height: 38 }}
              button
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <Icon
                  style={{
                    color:
                      props.Theme.theme === "light"
                        ? selectedIndex === 5
                          ? "#A45C06"
                          : "#040302"
                        : "#fff",
                  }}
                  name="users"
                />
              </ListItemIcon>
              <ListItemText
                style={{
                  color:
                    props.Theme.theme === "light"
                      ? selectedIndex === 5
                        ? "#A45C06"
                        : "#040302"
                      : "#fff",
                }}
                primary="Users"
              />
            </ListItem>

            <Divider />
          </List>
        </div>
      </div>
      <div
        style={{
          width: "77.5%",
          borderWidth: 1,
          borderColor: props.Theme.theme === "light" ? "#929292" : "#CECECE",
          borderStyle: "solid",
        }}
      >
        <MainSwitchView view={props.SettingViews.view} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme,
    SettingViews: state.SettingViews,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchEvent: (data) => dispatch(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
