"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var Divider_1 = require("@material-ui/core/Divider");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var ListItemAvatar_1 = require("@material-ui/core/ListItemAvatar");
var Avatar_1 = require("@material-ui/core/Avatar");
var Typography_1 = require("@material-ui/core/Typography");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}); });
var Dep_Notifications = function () {
    var classes = useStyles();
    return (React.createElement(List_1.default, { className: classes.root },
        React.createElement(ListItem_1.default, { button: true, alignItems: "flex-start" },
            React.createElement(ListItemAvatar_1.default, null,
                React.createElement(Avatar_1.default, { alt: "Remy Sharp", src: "/static/images/avatar/1.jpg" })),
            React.createElement(ListItemText_1.default, { primary: "Brunch this weekend?", secondary: React.createElement(React.Fragment, null,
                    React.createElement(Typography_1.default, { component: "span", variant: "body2", className: classes.inline, color: "textPrimary" }, "Ali Connors"),
                    " — I'll be in your neighborhood doing errands this…") })),
        React.createElement(Divider_1.default, { variant: "inset", component: "li" }),
        React.createElement(ListItem_1.default, { button: true, alignItems: "flex-start" },
            React.createElement(ListItemAvatar_1.default, null,
                React.createElement(Avatar_1.default, { alt: "Travis Howard", src: "/static/images/avatar/2.jpg" })),
            React.createElement(ListItemText_1.default, { primary: "Summer BBQ", secondary: React.createElement(React.Fragment, null,
                    React.createElement(Typography_1.default, { component: "span", variant: "body2", className: classes.inline, color: "textPrimary" }, "to Scott, Alex, Jennifer"),
                    " — Wish I could come, but I'm out of town this…") })),
        React.createElement(Divider_1.default, { variant: "inset", component: "li" }),
        React.createElement(ListItem_1.default, { button: true, alignItems: "flex-start" },
            React.createElement(ListItemAvatar_1.default, null,
                React.createElement(Avatar_1.default, { alt: "Cindy Baker", src: "/static/images/avatar/3.jpg" })),
            React.createElement(ListItemText_1.default, { primary: "Oui Oui", secondary: React.createElement(React.Fragment, null,
                    React.createElement(Typography_1.default, { component: "span", variant: "body2", className: classes.inline, color: "textPrimary" }, "Sandra Adams"),
                    ' — Do you have Paris recommendations? Have you ever…') }))));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Dep_Notifications);
//# sourceMappingURL=Dep_Notifications.js.map