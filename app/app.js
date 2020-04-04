"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("@material-ui/core/styles");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var AppBar_1 = require("@material-ui/core/AppBar");
var grommet_1 = require("grommet");
var core_2 = require("@blueprintjs/core");
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
var SelectionPan_1 = require("./screens/SelectionPan");
var LoginPage_1 = require("./screens/LoginPage");
var WorkPeriod_1 = require("./screens/WorkPeriod");
var Pos_1 = require("./screens/Pos");
var Tickets_1 = require("./screens/Tickets");
var Accouts_1 = require("./screens/Accouts");
var AccountDetails_1 = require("./screens/Accouts/AccountDetails");
var Warehouses_1 = require("./screens/Warehouses");
var DepartmentView_1 = require("./screens/Departments/DepartmentView");
var socketIOClient = require("socket.io-client");
var moment = require("moment");
var socketUrl = "http://localhost:3200";
// Moment valz
var date = new Date();
var check = moment(date);
var day = check.format("dddd"); // => ('Monday' , 'Tuesday' ----)
var month = check.format("MMMM"); // => ('January','February.....)
var year = check.format("YYYY");
// Theme layout
var darkTheme = styles_1.createMuiTheme({
    palette: {
        type: "dark"
    }
});
var lightTheme = styles_1.createMuiTheme({
    palette: {
        type: "light"
    }
});
// Tool tip
var HtmlTooltip = styles_2.withStyles(function (theme) { return ({
    tooltip: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: "1px solid #dadde9"
    }
}); })(Tooltip_1.default);
var Accapp = function (props) {
    var _a = React.useState({ Connected: false }), conn = _a[0], setConn = _a[1];
    var _b = React.useState(true), iSConnecting = _b[0], setiSConnecting = _b[1];
    var history = react_router_dom_1.useHistory();
    React.useEffect(function () {
        initiSocket();
        setTimeout(function () { }, 100);
    }, []);
    var initiSocket = function () {
        setConn(__assign({}, conn, { Connected: false }));
        var socket = socketIOClient(socketUrl);
        socket.on("connect", function () {
            setConn(__assign({}, conn, { Connected: true }));
            props.dispatchEvent({ type: "CONNECTED", socket: socket });
        });
        socket.on("disconnect", function () {
            props.dispatchEvent({ type: "CONNCETIONFAILED" });
        });
        setTimeout(function () {
            setiSConnecting(false);
        }, 300);
    };
    return (React.createElement(styles_1.ThemeProvider, { theme: props.Theme.theme === "light" ? lightTheme : darkTheme },
        React.createElement(core_1.Paper, { square: true, style: { width: "100%", height: "100vh" } },
            React.createElement(AppBar_1.default, { elevation: 1, position: "static", color: "default" },
                React.createElement("div", { style: {
                        width: "100%",
                        paddingLeft: 10,
                        display: "flex",
                        justifyContent: "space-between"
                    } },
                    React.createElement("div", { style: { display: "flex", marginTop: 10 } },
                        React.createElement("div", null,
                            React.createElement("img", { style: { width: 30, marginTop: -2, marginRight: 10 }, src: "./assets/icons/logo.png" })),
                        React.createElement("div", null,
                            React.createElement(core_1.Typography, { variant: "h6", style: { color: "#AAAAAA", marginTop: -5 }, color: "inherit" }, "Switch Smart"))),
                    React.createElement("div", { style: { marginRight: 26, display: "flex" } },
                        React.createElement("div", { style: { display: "flex", color: "#888080" } },
                            React.createElement("div", { style: { marginTop: 5, marginRight: 10 } },
                                React.createElement(core_1.Typography, { variant: "h6" },
                                    day,
                                    ",")),
                            React.createElement("div", { style: { marginTop: 5, marginRight: 10 } },
                                React.createElement(core_1.Typography, { variant: "h6" },
                                    month,
                                    " ",
                                    date.getDate(),
                                    ",")),
                            React.createElement("div", { style: { marginTop: 5, marginRight: 10 } },
                                React.createElement(core_1.Typography, { variant: "h6" }, year)),
                            React.createElement("div", { style: { marginTop: 9, marginRight: 20 } },
                                React.createElement(core_1.Typography, { variant: "h6" },
                                    React.createElement(grommet_1.Clock, { style: { color: "#888080" }, type: "digital" }))))))),
            React.createElement(core_1.Paper, { style: {
                    width: "100%",
                    height: "85vh"
                } },
                React.createElement(react_router_dom_1.Route
                // path="/"
                , { 
                    // path="/"
                    path: "/login", exact: true, component: LoginPage_1.default }),
                React.createElement(react_router_dom_1.Route
                // path="/home/selection"
                , { 
                    // path="/home/selection"
                    path: "/", exact: true, component: SelectionPan_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/home/workperiod", component: WorkPeriod_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/home/pos", component: Pos_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/home/tickets", component: Tickets_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/home/accounts", component: Accouts_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/home/accounts_details", component: AccountDetails_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/home/warehouses", component: Warehouses_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/home/departments", component: DepartmentView_1.DepartmentView })),
            React.createElement(AppBar_1.default, { style: {
                    borderStyle: "solid",
                    height: 50,
                    borderWidth: 1,
                    borderColor: "transparent",
                    borderTopColor: props.Theme.theme === "light" ? "#C6C6C6" : "transparent"
                }, position: "static", color: "default" },
                React.createElement("div", { style: {
                        marginTop: 10,
                        marginRight: 15,
                        display: "flex",
                        justifyContent: "space-between"
                    } },
                    React.createElement("div", { style: { marginLeft: 20 } }, iSConnecting ? (React.createElement("div", { style: { marginTop: 5, display: "flex" } },
                        React.createElement(semantic_ui_react_1.Icon, { name: "refresh", loading: true }),
                        React.createElement(core_1.Typography, { style: { marginTop: -4 } }, "Connecting"))) : (React.createElement("div", null, props.SocketConn.isConn ? (React.createElement("div", { style: { marginTop: 5, display: "flex" } },
                        React.createElement(semantic_ui_react_1.Icon, { name: "server", color: "green" }),
                        React.createElement(core_1.Typography, { style: { marginTop: -1 } }, "Connected*"))) : (React.createElement("div", { style: { marginTop: 5, display: "flex" } },
                        React.createElement(semantic_ui_react_1.Icon, { name: "server" }),
                        React.createElement(core_1.Typography, { style: { marginTop: -1 } }, "Connection Failed")))))),
                    React.createElement("div", { style: { display: "flex" } },
                        React.createElement("div", { style: { marginTop: 3, marginRight: 10 } },
                            React.createElement(core_1.Typography, null, "Melvin Chipimo")),
                        React.createElement("div", { style: { marginRight: 10 } },
                            React.createElement(core_2.Button, { onClick: function () {
                                    history.push("/");
                                } },
                                React.createElement(core_1.Typography, null, "Main Menu"))),
                        React.createElement("div", null,
                            React.createElement(HtmlTooltip, { title: React.createElement(React.Fragment, null,
                                    React.createElement(core_1.Typography, { color: "inherit" }, "Change Theme Color"), "default theme:" + props.Theme.theme) },
                                React.createElement(core_1.IconButton, { style: {
                                        width: 30,
                                        height: 30,
                                        backgroundColor: props.Theme.theme === "light" ? "#212121" : "#ccc"
                                    }, onClick: function () {
                                        props.dispatchEvent({
                                            type: "setTheme",
                                            setTheme: props.Theme.theme === "light" ? "dark" : "light"
                                        });
                                    } })))))))));
};
function mapStateToProps(state) {
    return {
        NetiveNotify: state.NetiveNotify,
        Theme: state.Theme,
        SocketConn: state.SocketConn
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Accapp);
//# sourceMappingURL=app.js.map