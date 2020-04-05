"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var semantic_ui_react_1 = require("semantic-ui-react");
var core_1 = require("@material-ui/core");
exports.DepartmentView = function () {
    var panes = [
        {
            menuItem: { key: "department", icon: "sitemap", content: "Departments" },
            render: function () { return React.createElement(semantic_ui_react_1.Tab.Pane, null, "Tab 1 Content"); }
        },
        {
            menuItem: { key: "users", icon: "users", content: "Users" },
            render: function () { return React.createElement(semantic_ui_react_1.Tab.Pane, null, "Tab 2 Content"); }
        },
        {
            menuItem: (React.createElement(semantic_ui_react_1.Menu.Item, { key: "messages" },
                "Notifications",
                React.createElement(semantic_ui_react_1.Label, null, "15"))),
            render: function () { return React.createElement(semantic_ui_react_1.Tab.Pane, null, "Tab 3 Content"); }
        }
    ];
    return (React.createElement("div", { style: { width: "100%", display: "flex" } },
        React.createElement("div", { style: {
                width: "80%",
                padding: 10
            } },
            React.createElement(semantic_ui_react_1.Tab, { panes: panes })),
        React.createElement("div", { style: { width: "20%" } },
            React.createElement(core_1.Button, { style: { width: "100%" } }, "New Department"))));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.DepartmentView);
//# sourceMappingURL=DepartmentView.js.map