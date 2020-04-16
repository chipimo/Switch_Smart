"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var Divider_1 = require("@material-ui/core/Divider");
var semantic_ui_react_1 = require("semantic-ui-react");
var SideList_1 = require("../Products/SideList");
var List_2 = require("../Products/List");
var InvSideView_1 = require("../Inventory/InvSideView");
var Price_List_Editor_1 = require("../Products/Price_List_Editor");
var SideSwitchView = function (props) {
    switch (props.view) {
        case "products":
            return React.createElement(SideList_1.default, null);
            break;
        case "inventory":
            return React.createElement(InvSideView_1.default, null);
            break;
        default:
            return null;
            break;
    }
};
var MainSwitchView = function (props) {
    switch (props.view) {
        case "product_list":
            return React.createElement(List_2.default, null);
            break;
        case "Price_List_Editor":
            return React.createElement(Price_List_Editor_1.default, null);
            break;
        case "Price_Group":
            return React.createElement(Price_List_Editor_1.default, null);
            break;
        default:
            return null;
            break;
    }
};
var index = function (props) {
    var _a = React.useState(10), selectedIndex = _a[0], setSelectedIndex = _a[1];
    var _b = React.useState(""), view = _b[0], setView = _b[1];
    var handleListItemClick = function (event, index) {
        setSelectedIndex(index);
        if (index === 0) {
            setView("products");
        }
        else if (index === 1) {
            setView("inventory");
        }
    };
    return (React.createElement("div", { style: {
            width: "99%",
            height: "85vh",
            display: "flex",
            justifyContent: "space-between",
            padding: 8,
        } },
        React.createElement("div", { style: {
                width: "22%",
                borderWidth: 1,
                borderColor: props.Theme.theme === "light" ? "#929292" : "#CECECE",
                borderStyle: "solid",
            } },
            React.createElement("div", { style: {
                    width: "100%",
                    padding: 5,
                } },
                React.createElement(core_1.Typography, null, props.SettingViews.title)),
            React.createElement(Divider_1.default, null),
            React.createElement("div", { style: { height: "35vh" } },
                React.createElement(SideSwitchView, { view: view })),
            React.createElement("div", null,
                React.createElement(List_1.default, { component: "nav", "aria-label": "main mailbox folders" },
                    React.createElement(Divider_1.default, null),
                    React.createElement(ListItem_1.default, { style: { height: 38 }, button: true, selected: selectedIndex === 0, onClick: function (event) { return handleListItemClick(event, 0); } },
                        React.createElement(ListItemIcon_1.default, null,
                            React.createElement(semantic_ui_react_1.Icon, { style: {
                                    color: props.Theme.theme === "light"
                                        ? selectedIndex === 0
                                            ? "#A45C06"
                                            : "#040302"
                                        : "#fff",
                                }, name: "box" })),
                        React.createElement(ListItemText_1.default, { style: {
                                color: props.Theme.theme === "light"
                                    ? selectedIndex === 0
                                        ? "#F78A09"
                                        : "#040302"
                                    : "#fff",
                            }, primary: "Products" })),
                    React.createElement(Divider_1.default, null),
                    React.createElement(ListItem_1.default, { style: { height: 38 }, button: true, selected: selectedIndex === 1, onClick: function (event) { return handleListItemClick(event, 1); } },
                        React.createElement(ListItemIcon_1.default, null,
                            React.createElement(semantic_ui_react_1.Icon, { style: {
                                    color: props.Theme.theme === "light"
                                        ? selectedIndex === 1
                                            ? "#A45C06"
                                            : "#040302"
                                        : "#fff",
                                }, name: "clone" })),
                        React.createElement(ListItemText_1.default, { style: {
                                color: props.Theme.theme === "light"
                                    ? selectedIndex === 1
                                        ? "#A45C06"
                                        : "#040302"
                                    : "#fff",
                            }, primary: "Inventory" })),
                    React.createElement(Divider_1.default, null),
                    React.createElement(ListItem_1.default, { style: { height: 38 }, button: true, selected: selectedIndex === 2, onClick: function (event) { return handleListItemClick(event, 2); } },
                        React.createElement(ListItemIcon_1.default, null,
                            React.createElement(semantic_ui_react_1.Icon, { style: {
                                    color: props.Theme.theme === "light"
                                        ? selectedIndex === 2
                                            ? "#A45C06"
                                            : "#040302"
                                        : "#fff",
                                }, name: "book" })),
                        React.createElement(ListItemText_1.default, { style: {
                                color: props.Theme.theme === "light"
                                    ? selectedIndex === 2
                                        ? "#A45C06"
                                        : "#040302"
                                    : "#fff",
                            }, primary: "Tickets" })),
                    React.createElement(Divider_1.default, null),
                    React.createElement(ListItem_1.default, { style: { height: 38 }, button: true, selected: selectedIndex === 3, onClick: function (event) { return handleListItemClick(event, 3); } },
                        React.createElement(ListItemIcon_1.default, null,
                            React.createElement(semantic_ui_react_1.Icon, { style: {
                                    color: props.Theme.theme === "light"
                                        ? selectedIndex === 3
                                            ? "#A45C06"
                                            : "#040302"
                                        : "#fff",
                                }, name: "calculator" })),
                        React.createElement(ListItemText_1.default, { style: {
                                color: props.Theme.theme === "light"
                                    ? selectedIndex === 3
                                        ? "#A45C06"
                                        : "#040302"
                                    : "#fff",
                            }, primary: "Accounts" })),
                    React.createElement(Divider_1.default, null),
                    React.createElement(ListItem_1.default, { style: { height: 38 }, button: true, selected: selectedIndex === 4, onClick: function (event) { return handleListItemClick(event, 4); } },
                        React.createElement(ListItemIcon_1.default, null,
                            React.createElement(semantic_ui_react_1.Icon, { style: {
                                    color: props.Theme.theme === "light"
                                        ? selectedIndex === 4
                                            ? "#A45C06"
                                            : "#040302"
                                        : "#fff",
                                }, name: "barcode" })),
                        React.createElement(ListItemText_1.default, { style: {
                                color: props.Theme.theme === "light"
                                    ? selectedIndex === 4
                                        ? "#A45C06"
                                        : "#040302"
                                    : "#fff",
                            }, primary: "Entities" })),
                    React.createElement(Divider_1.default, null),
                    React.createElement(ListItem_1.default, { style: { height: 38 }, button: true, selected: selectedIndex === 5, onClick: function (event) { return handleListItemClick(event, 5); } },
                        React.createElement(ListItemIcon_1.default, null,
                            React.createElement(semantic_ui_react_1.Icon, { style: {
                                    color: props.Theme.theme === "light"
                                        ? selectedIndex === 5
                                            ? "#A45C06"
                                            : "#040302"
                                        : "#fff",
                                }, name: "users" })),
                        React.createElement(ListItemText_1.default, { style: {
                                color: props.Theme.theme === "light"
                                    ? selectedIndex === 5
                                        ? "#A45C06"
                                        : "#040302"
                                    : "#fff",
                            }, primary: "Users" })),
                    React.createElement(Divider_1.default, null)))),
        React.createElement("div", { style: {
                width: "77.5%",
                borderWidth: 1,
                borderColor: props.Theme.theme === "light" ? "#929292" : "#CECECE",
                borderStyle: "solid",
            } },
            React.createElement(MainSwitchView, { view: props.SettingViews.view }))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme,
        SettingViews: state.SettingViews,
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(index);
//# sourceMappingURL=index.js.map