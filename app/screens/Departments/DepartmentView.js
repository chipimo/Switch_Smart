"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var semantic_ui_react_1 = require("semantic-ui-react");
var core_1 = require("@material-ui/core");
var DepTable_1 = require("./DepTable");
var Users_1 = require("./Users");
var Dep_Notifications_1 = require("./Dep_Notifications");
var DepartmentView = function (props) {
    var panes = [
        {
            menuItem: { key: "department", icon: "sitemap", content: "Departments" },
            render: function () { return (React.createElement(semantic_ui_react_1.Tab.Pane, null,
                React.createElement(DepTable_1.default, null))); }
        },
        {
            menuItem: { key: "users", icon: "users", content: "Users" },
            render: function () { return (React.createElement(semantic_ui_react_1.Tab.Pane, null,
                React.createElement(Users_1.default, null))); }
        },
        {
            menuItem: (React.createElement(semantic_ui_react_1.Menu.Item, { key: "messages" },
                "Notifications",
                React.createElement(semantic_ui_react_1.Label, null, "15"))),
            render: function () { return (React.createElement(semantic_ui_react_1.Tab.Pane, null,
                React.createElement(Dep_Notifications_1.default, null))); }
        }
    ];
    return (React.createElement("div", { style: {
            width: "100%",
            display: "flex",
            height: "85vh",
            backgroundColor: props.Theme.theme === "light" ? "#E5E5E5" : "transparent"
        } },
        React.createElement("div", { style: {
                width: "80%",
                padding: 10
            } },
            React.createElement(semantic_ui_react_1.Tab, { panes: panes })),
        React.createElement("div", { style: { width: "20%" } },
            React.createElement(core_1.Button, { variant: "contained", color: "primary", style: { width: "95%", marginTop: 20, height: 50 } }, "New Department"))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DepartmentView);
//# sourceMappingURL=DepartmentView.js.map