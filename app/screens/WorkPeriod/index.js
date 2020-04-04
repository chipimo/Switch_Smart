"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    root: {
        width: "100%",
        listStyle: "none",
        padding: 0,
        margin: 0,
        marginTop: 2
    },
    list_light: {
        width: "100%",
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "#E3E3E3"
        }
    },
    list_dark: {
        width: "100%",
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "#6B6B6B"
        }
    }
});
exports.index = function (props) {
    var classes = useStyles();
    var _a = React.useState(0), active = _a[0], setActive = _a[1];
    var handleSelected = function (id) {
        setActive(id);
    };
    return (React.createElement("div", { style: {
            borderColor: props.Theme.theme === "light" ? "#ccc" : "#535353",
            borderWidth: 1,
            borderStyle: "solid",
            width: "98%",
            height: "84vh",
            marginLeft: 10,
            display: "flex",
            padding: 10,
            justifyContent: "space-between"
        } },
        React.createElement("div", { style: {
                width: "76%",
                borderColor: props.Theme.theme === "light" ? "#ccc" : "#535353",
                borderWidth: 1,
                borderStyle: "solid"
            } },
            React.createElement("div", null,
                React.createElement("ul", { className: classes.root },
                    React.createElement("div", { className: props.Theme.theme === "light"
                            ? classes.list_light
                            : classes.list_dark },
                        React.createElement("li", { onClick: function () { return handleSelected(1); }, style: {
                                padding: 6,
                                backgroundColor: active === 1
                                    ? props.Theme.theme === "light"
                                        ? "#F78A09"
                                        : "#212121"
                                    : "transparent",
                                color: active === 1 ? "#fff" : "#1D1D1D"
                            } },
                            React.createElement(core_1.Typography, { style: {
                                    color: props.Theme.theme === "light"
                                        ? active === 1
                                            ? "#fff"
                                            : "#1D1D1D"
                                        : "#fff"
                                } }, "Tuesday, March 31, 2020 8:06 AM")))))),
        React.createElement("div", { style: { width: "23%" } },
            React.createElement("div", null),
            React.createElement("div", { style: { width: "100%" } },
                React.createElement("div", { style: { marginTop: 20 } },
                    React.createElement(core_1.Typography, { style: { fontSize: 16 } }, "Date of work Period: 3/28/2020"),
                    React.createElement(core_1.Typography, { style: { fontSize: 16 } }, "Time of work Period: 1:04 AM"),
                    React.createElement(core_1.Typography, { style: { fontSize: 16 } }, "Total work Time:"),
                    React.createElement(core_1.Typography, { style: { fontSize: 16 } }, "3 days 6 hours 23 minutes")),
                React.createElement("div", { style: { marginTop: 20 } }),
                React.createElement(core_1.Button, { style: { width: "100%" }, variant: "contained", color: "primary", disableElevation: true }, "Start Work Period"),
                React.createElement("div", { style: { height: 10 } }),
                React.createElement(core_1.Button, { style: { width: "100%" }, variant: "contained", color: "primary", disableElevation: true }, "End Work Period")))));
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