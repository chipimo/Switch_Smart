"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var DialPad_1 = require("./DialPad");
var dataBase_1 = require("../../redux/dataBase");
var react_lottie_1 = require("react-lottie");
var semantic_ui_react_1 = require("semantic-ui-react");
var animationData = require("../../assets/lottie/505-error.json");
var Departments_1 = require("../Departments");
var index = function (props) {
    React.useEffect(function () {
        setTimeout(function () {
            dataBase_1.default.CheckConfig();
        }, 200);
    }, []);
    var defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (React.createElement(core_1.Paper, { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundColor: props.Theme.theme === "light" ? "#E5E5E5" : "transparent"
        } },
        React.createElement("div", { style: {
                width: "60%",
                textAlign: "center",
                justifyContent: "center",
                marginTop: 190
            } }, props.Config.isSet ? (React.createElement("div", null,
            React.createElement(core_1.Typography, { variant: "h3" }, "Switch Smart POS"),
            React.createElement(core_1.Typography, { variant: "caption", style: { fontSize: 16 } }, "Switch to a smart world"),
            React.createElement("div", { style: {
                    width: "30%",
                    margin: "auto",
                    marginBottom: 20,
                    marginTop: 5
                } },
                React.createElement(core_1.Divider, null)),
            React.createElement(core_1.Typography, { variant: "caption", style: { fontSize: 12 } }, "Powered by Software Gaints."),
            React.createElement("div", null),
            React.createElement(core_1.Typography, { variant: "caption", style: { fontSize: 12 } },
                " ",
                "Copyright © ",
                new Date().getFullYear(),
                "."))) : (React.createElement("div", { style: { marginTop: -120 } }, !props.SocketConn.isConn ? (React.createElement("div", null,
            React.createElement(react_lottie_1.default, { options: defaultOptions, height: 200, width: 200 }),
            React.createElement("div", { style: { width: "50%", margin: "auto" } },
                React.createElement(semantic_ui_react_1.Message, { negative: props.SocketConn.isConn ? false : true },
                    React.createElement(semantic_ui_react_1.Message.Header, null, "We're sorry we can't procced now !!!"),
                    React.createElement(core_1.Typography, null, "Server connection faild, this may be casused by internet connetion loss, make sure you have internet connection and try again")),
                React.createElement(core_1.Button, { variant: "outlined" }, "Retry again")))) : (React.createElement("div", null,
            React.createElement(Departments_1.default, null)))))),
        React.createElement("div", { style: { width: "40%" } },
            React.createElement(DialPad_1.default, null))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme,
        SocketConn: state.SocketConn,
        Config: state.Config
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(index);
//# sourceMappingURL=index.js.map