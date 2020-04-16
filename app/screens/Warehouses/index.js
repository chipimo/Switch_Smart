"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var semantic_ui_react_1 = require("semantic-ui-react");
var core_1 = require("@material-ui/core");
var Inventory_1 = require("./Inventory");
exports.index = function (props) {
    var panes = [
        {
            menuItem: { key: "inventory", icon: "box", content: "Inventory Item" },
            render: function () { return (React.createElement(semantic_ui_react_1.Tab.Pane, null,
                React.createElement(Inventory_1.default, null))); }
        },
        {
            menuItem: { key: "costs", icon: "money", content: "Costs" },
            render: function () { return React.createElement(semantic_ui_react_1.Tab.Pane, null, "Tab 2"); }
        }
    ];
    return (React.createElement("div", { style: {
            width: "100%",
            height: "85vh",
            padding: 25,
            backgroundColor: props.Theme.theme === "light" ? "#E5E5E5" : "transparent"
        } },
        React.createElement("div", { style: {
                textAlign: "center",
                borderColor: "#ccc",
                borderWidth: 1,
                borderStyle: "solid",
                marginBottom: 15,
                padding: 10,
                backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121"
            } },
            React.createElement(core_1.Typography, null, "Local Warehouse")),
        React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Tab, { panes: panes }))));
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
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.index);
//# sourceMappingURL=index.js.map