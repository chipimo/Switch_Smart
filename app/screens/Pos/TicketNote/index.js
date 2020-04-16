"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var TextField_1 = require("@material-ui/core/TextField");
var Button_1 = require("@material-ui/core/Button");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    paper: {
        position: "absolute",
        width: 600,
        height: 300,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}); });
function index() {
    var classes = useStyles();
    return (React.createElement("div", { className: classes.paper },
        React.createElement(TextField_1.default, { id: "outlined-multiline-static", label: "Ticket note", multiline: true, fullWidth: true, variant: "outlined" }),
        React.createElement("div", { style: { display: "flex", marginTop: 30 } },
            React.createElement(Button_1.default, { variant: "contained", color: "secondary" }, "Add Note"))));
}
exports.default = index;
//# sourceMappingURL=index.js.map