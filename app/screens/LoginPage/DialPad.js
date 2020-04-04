"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var DialPad = function (props) {
    return (React.createElement("div", { style: { width: "70%", marginTop: 25 } },
        React.createElement("div", null,
            React.createElement(core_1.TextField, { disabled: props.Config.isSet ? false : true, style: { borderRadius: 0 }, fullWidth: true, id: "filled-password-input", label: "ENTER PIN", type: "password", autoComplete: "current-password", variant: "outlined", color: props.Theme.theme === "light" ? "primary" : "secondary", autoFocus: true })),
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 6
            } },
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "1")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "2")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "3"))),
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 6
            } },
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "4")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "5")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "6"))),
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 6
            } },
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "7")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "8")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "9"))),
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: 6
            } },
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "X")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, "0")),
            React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                    width: 98,
                    backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                    height: 70,
                    borderRadius: 0
                }, variant: "outlined" },
                React.createElement(core_1.Typography, { variant: "h5" }, ">"))),
        React.createElement("div", { style: {
                width: "100%",
                marginTop: 10,
                textAlign: "center",
                justifyContent: "center"
            } },
            React.createElement("div", null,
                React.createElement(core_1.Typography, null, "Admin PIN 1234"),
                React.createElement(core_1.Typography, null, "Change PIN will hide this hint")),
            React.createElement("div", { style: { marginTop: 6 } },
                React.createElement(core_1.Button, { disabled: props.Config.isSet ? false : true, style: {
                        width: 98,
                        backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
                        height: 70,
                        borderRadius: 0
                    }, variant: "outlined" },
                    React.createElement(core_1.Typography, { variant: "h5" }, "@"))))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme,
        Config: state.Config
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DialPad);
//# sourceMappingURL=DialPad.js.map