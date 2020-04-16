"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var ListSubheader_1 = require("@material-ui/core/ListSubheader");
var core_1 = require("@material-ui/core");
var Search_1 = require("@material-ui/icons/Search");
var NewProduct_1 = require("./NewProduct");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        overflow: "auto",
        maxHeight: "80vh",
    },
    listSection: {
        backgroundColor: "inherit",
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0,
    },
    rootSearch: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 200,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    searchBar: {
        outline: "none",
        border: "none",
        width: 400,
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}); });
var ProductList = function (props) {
    var classes = useStyles();
    var _a = React.useState(false), openNewProduct = _a[0], setopenNewProduct = _a[1];
    React.useEffect(function () {
        if (props.Model.toClose === "new_product") {
            props.dispatchEvent({ type: "HANDELCLEAR" });
            CloseOpenNewProduct();
        }
    });
    var handleOpenNewProduct = function () {
        setopenNewProduct(true);
    };
    var CloseOpenNewProduct = function () {
        setopenNewProduct(false);
    };
    return (React.createElement("div", { style: {
            width: "100%",
            display: "flex",
            padding: 4,
            backgroundColor: props.Theme.theme === "light" ? "#F5F5F5" : "#212121",
        } },
        React.createElement("div", { style: {
                width: "75%",
                height: "80vh",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: props.Theme.theme === "light" ? "#929292" : "#CECECE",
                marginTop: 1,
            } },
            React.createElement(List_1.default, { className: classes.root, subheader: React.createElement("li", null) }, [0, 1, 2, 3, 4].map(function (sectionId) { return (React.createElement("li", { key: "section-" + sectionId, className: classes.listSection },
                React.createElement("ul", { className: classes.ul },
                    React.createElement(ListSubheader_1.default, { style: {
                            padding: 10,
                            backgroundColor: props.Theme.theme === "light" ? "#F5F5F5" : "#212121",
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "transparent",
                            borderTopColor: props.Theme.theme === "light" ? "#B9B9B9" : "#CECECE",
                            borderBottomColor: props.Theme.theme === "light" ? "#B9B9B9" : "#CECECE",
                        } },
                        React.createElement(core_1.Typography, { variant: "h6" }, "I'm sticky " + sectionId)),
                    [0, 1, 2].map(function (item) { return (React.createElement(ListItem_1.default, { key: "item-" + sectionId + "-" + item },
                        React.createElement(ListItemText_1.default, { primary: "Item " + item }))); })))); }))),
        React.createElement("div", { style: {
                width: "25%",
                height: "80vh",
                marginTop: 1,
                padding: 6,
            } },
            React.createElement("div", null,
                React.createElement(core_1.Paper, { component: "form", className: classes.rootSearch },
                    React.createElement(core_1.InputBase, { className: classes.input, placeholder: "Search Products", inputProps: { "aria-label": "search google maps" } }),
                    React.createElement(core_1.Divider, { className: classes.divider, orientation: "vertical" }),
                    React.createElement(core_1.IconButton, { type: "submit", className: classes.iconButton, "aria-label": "search" },
                        React.createElement(Search_1.default, null)))),
            React.createElement("div", null,
                React.createElement("div", { onClick: function () { return handleOpenNewProduct(); }, style: { marginTop: 10 } },
                    React.createElement(core_1.Typography, { style: {
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: "transparent",
                            borderBottomColor: "#ccc",
                            padding: 5,
                            cursor: "pointer",
                        } }, "Add Product")))),
        React.createElement(core_1.Modal, { "aria-labelledby": "simple-modal-title", "aria-describedby": "simple-modal-description", open: openNewProduct, className: classes.modal },
            React.createElement(NewProduct_1.default, null))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme,
        Model: state.Model,
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ProductList);
//# sourceMappingURL=List.js.map