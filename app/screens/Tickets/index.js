"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    textField: {
        width: 200,
    }
}); });
exports.index = function () {
    var classes = useStyles();
    return (React.createElement("div", null,
        React.createElement("div", { style: { padding: 20, width: "100%", display: "flex" } },
            React.createElement("div", { style: {} },
                React.createElement(core_1.TextField, { id: "date", fullWidth: true, label: "Date from ", type: "date", defaultValue: "2017-05-24", className: classes.textField, InputLabelProps: {
                        shrink: true
                    } })),
            React.createElement("div", { style: { marginLeft: 40 } },
                React.createElement(core_1.TextField, { id: "date", fullWidth: true, label: "Date to ", type: "date", defaultValue: "2017-05-24", className: classes.textField, InputLabelProps: {
                        shrink: true
                    } }))),
        React.createElement("div", null),
        React.createElement("div", null)));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.index);
//# sourceMappingURL=index.js.map