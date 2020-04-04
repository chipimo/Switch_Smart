"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
exports.index = function (props) {
    return (React.createElement("div", null,
        React.createElement(core_1.Button, { style: {
                width: "100%",
                backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121"
            }, variant: "outlined" },
            React.createElement(core_1.Typography, null, "Select Customer")),
        React.createElement(core_1.Button, { style: {
                width: "100%",
                backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                marginTop: 10
            }, variant: "outlined" },
            React.createElement(core_1.Typography, null, "Ticket Note")),
        React.createElement(core_1.Button, { style: {
                width: "100%",
                backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                marginTop: 10
            }, variant: "outlined" },
            React.createElement(core_1.Typography, null, "Qutotation Ticket")),
        React.createElement(core_1.Button, { style: {
                width: "100%",
                backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                marginTop: 10
            }, variant: "outlined" },
            React.createElement(core_1.Typography, null, "Repare Ticket"))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme,
        SocketConn: state.SocketConn
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.index);
//# sourceMappingURL=index.js.map