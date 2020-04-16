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
var react_redux_1 = require("react-redux");
var styles_1 = require("@material-ui/core/styles");
var TextField_1 = require("@material-ui/core/TextField");
var Button_1 = require("@material-ui/core/Button");
var core_1 = require("@material-ui/core");
var Autocomplete_1 = require("@material-ui/lab/Autocomplete");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    paper: {
        position: "absolute",
        width: 700,
        height: 500,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3, 4, 3),
    },
    table: {
        width: "100%",
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 1,
        borderCollapse: "collapse",
    },
    tableCol: {
        width: 130,
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 1,
    },
    tableRow: {
        width: 130,
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 1,
    },
    link: {
        color: "#0078D7",
        textDecoration: "underline",
        marginTop: 20,
        cursor: "pointer",
        "&:hover, &$focusVisible": {
            color: "#002847",
        },
    },
}); });
var NewProduct = function (props) {
    var classes = useStyles();
    var _a = React.useState({
        data: [],
    }), portionInputs = _a[0], setPortionInputs = _a[1];
    var _b = React.useState({}), portionValues = _b[0], setPortionValues = _b[1];
    var _c = React.useState({
        ProductName: "",
        BarCode: "",
        alertOut: "",
        amount: "",
        Groupname: "",
        subtree: "",
    }), values = _c[0], setValues = _c[1];
    var _d = React.useState({
        nameError: "",
        barCodeError: "",
        alertOutError: "",
        groupError: "",
        amount: "",
        subtreeError: "",
    }), errors = _d[0], setErrors = _d[1];
    var _e = React.useState({
        barcode: [],
    }), barcodes = _e[0], setBarcodes = _e[1];
    var _f = React.useState({ data: [] }), PriceValues = _f[0], setPriceValues = _f[1];
    var _g = React.useState({ data: [] }), MultiplierValues = _g[0], setMultiplierValues = _g[1];
    var _h = React.useState({ data: [] }), BarcodeValues = _h[0], setBarcodeValues = _h[1];
    var _j = React.useState([]), mainGroups = _j[0], setMainGroups = _j[1];
    var handleTextChange = function (prop) { return function (event) {
        var _a;
        setValues(__assign({}, values, (_a = {}, _a[prop] = event.target.value, _a)));
        if (prop === "ProductName")
            setErrors(__assign({}, errors, { nameError: "" }));
        if (prop === "alertOut")
            setErrors(__assign({}, errors, { alertOutError: "" }));
        if (prop === "Groupname")
            setErrors(__assign({}, errors, { groupError: "" }));
        if (prop === "subtree")
            setErrors(__assign({}, errors, { subtreeError: "" }));
    }; };
    var handelOnTextPartonChage = function (type, value, id) {
        var _a;
        setPortionValues(__assign({}, portionValues, (_a = { value: value }, _a[type] = type, _a.id = id, _a)));
        console.log(portionValues);
    };
    var handelPortion = function () {
        var newArr = [];
        newArr = portionInputs.data;
        var barcord = "input_" + newArr.length;
        var multiplierName = "multiplier_" + newArr.length;
        var price = "price_" + newArr.length;
        var id = 0;
        if (newArr.length === 0) {
            newArr.push({
                id: id,
                barcord: barcord,
                multiplier: multiplierName,
                price: price,
            });
        }
        else {
            id = newArr.length;
            newArr.push({
                id: id,
                barcord: barcord,
                multiplier: multiplierName,
                price: price,
            });
        }
        setPortionInputs(__assign({}, portionInputs, { data: newArr }));
    };
    return (React.createElement("div", { className: classes.paper, style: { backgroundColor: "#F8F8F8" } },
        React.createElement("div", { style: { height: 400 } },
            React.createElement(core_1.Grid, { container: true, spacing: 2 },
                React.createElement(core_1.Grid, { item: true, xs: 12, sm: 6 },
                    React.createElement(TextField_1.default, { autoComplete: "ProductName", name: "ProductName", variant: "outlined", required: true, fullWidth: true, value: values.ProductName, onChange: handleTextChange("ProductName"), id: "ProductName", label: "Product Name", autoFocus: true, error: errors.nameError === "" ? false : true, helperText: errors.nameError })),
                React.createElement(core_1.Grid, { item: true, xs: 12, sm: 6 },
                    React.createElement(Autocomplete_1.default, { id: "combo-box-demo", options: mainGroups, getOptionLabel: function (option) { return option.title; }, style: { width: 300 }, renderInput: function (params) { return (React.createElement(TextField_1.default, __assign({}, params, { label: "Group Code", variant: "outlined", fullWidth: true }))); } }))),
            React.createElement("div", { style: { marginTop: 10 } }),
            React.createElement(core_1.Grid, { item: true, xs: 12, sm: 6 },
                React.createElement(Autocomplete_1.default, { id: "combo-box-demo", options: mainGroups, getOptionLabel: function (option) { return option.title; }, style: { width: 300 }, renderInput: function (params) { return (React.createElement(TextField_1.default, __assign({}, params, { label: "Recipes", variant: "outlined", fullWidth: true }))); } })),
            React.createElement("div", { style: { marginTop: 30 } },
                React.createElement("div", { style: {
                        width: "100%",
                    } },
                    React.createElement("div", { style: {
                            width: "100%",
                            borderColor: "#aaaaaa",
                            borderStyle: "solid",
                            height: 230,
                            borderWidth: 1,
                            borderRadius: 3,
                            marginTop: 20,
                        } },
                        React.createElement("div", { style: {
                                marginTop: -10,
                                backgroundColor: "#F8F8F8",
                                marginLeft: 10,
                                width: 97,
                                paddingLeft: 5,
                            } },
                            React.createElement(core_1.Typography, { variant: "body2" }, "Portion Prices")),
                        React.createElement("div", { style: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            } },
                            React.createElement("div", { style: {
                                    padding: 10,
                                    width: "82%",
                                    maxHeight: 210,
                                    overflow: "hidden",
                                    overflowY: "auto",
                                } },
                                React.createElement("table", { className: classes.table },
                                    React.createElement("thead", null,
                                        React.createElement("tr", null,
                                            React.createElement("th", { className: classes.tableCol }, "BarCode"),
                                            React.createElement("th", { className: classes.tableCol }, "Multiplier"),
                                            React.createElement("th", { className: classes.tableCol }, "Price"))),
                                    React.createElement("tbody", null, portionInputs.data.map(function (tablelist) { return (React.createElement("tr", { key: tablelist.id },
                                        React.createElement("td", { className: classes.tableRow },
                                            React.createElement("input", { style: {
                                                    border: "none",
                                                    outline: "none",
                                                    width: 120,
                                                    backgroundColor: "transparent",
                                                }, onInput: function (e) {
                                                    handelOnTextPartonChage(tablelist.barcord, e.target.value, "barcode");
                                                }, type: "text", name: tablelist.barcode })),
                                        React.createElement("td", { className: classes.tableRow },
                                            React.createElement("input", { style: {
                                                    border: "none",
                                                    width: 120,
                                                    outline: "none",
                                                    backgroundColor: "transparent",
                                                }, onInput: function (e) {
                                                    handelOnTextPartonChage(tablelist.multiplier, e.target.value, "multiplier");
                                                }, type: "text", name: tablelist.multiplier })),
                                        React.createElement("td", { className: classes.tableRow },
                                            React.createElement("input", { style: {
                                                    border: "none",
                                                    width: 120,
                                                    outline: "none",
                                                    backgroundColor: "transparent",
                                                }, onInput: function (e) {
                                                    handelOnTextPartonChage(tablelist.price, e.target.value, "price");
                                                }, type: "text", name: tablelist.price })))); })))),
                            React.createElement("div", { style: { width: "15%" } },
                                React.createElement("div", null,
                                    React.createElement("a", { className: classes.link, onClick: function () { return handelPortion(); } }, "Add Portion")),
                                React.createElement("div", null,
                                    React.createElement("a", { className: classes.link }, "Delete Portion")))))))),
        React.createElement("div", { style: {
                display: "flex",
                marginTop: 20,
            } },
            React.createElement("div", null,
                React.createElement(Button_1.default, { style: { marginLeft: 10 }, variant: "contained", color: "primary", onClick: function () {
                        props.dispatchEvent({
                            type: "HANDELCLOSE",
                            toClose: "new_product",
                        });
                    } }, "Save")),
            React.createElement("div", null,
                React.createElement(Button_1.default, { onClick: function () {
                        props.dispatchEvent({
                            type: "HANDELCLOSE",
                            toClose: "new_product",
                        });
                    }, style: { marginLeft: 10 }, variant: "contained", color: "secondary" }, "Cancel")))));
};
function mapStateToProps(state) {
    return {
        Cart: state.Cart,
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewProduct);
//# sourceMappingURL=NewProduct.js.map