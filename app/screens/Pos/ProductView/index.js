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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var Tabs_1 = require("@material-ui/core/Tabs");
var Tab_1 = require("@material-ui/core/Tab");
var Box_1 = require("@material-ui/core/Box");
var core_2 = require("@material-ui/core");
var react_swipeable_views_1 = require("react-swipeable-views");
var ButtonBase_1 = require("@material-ui/core/ButtonBase");
var styles_2 = require("@material-ui/core/styles");
var Clear_1 = require("@material-ui/icons/Clear");
var MutiList_1 = require("./MutiList/MutiList");
var NumberFormat = require("react-number-format");
// const PropTypes = require("prop-types");
var darkTheme = styles_2.createMuiTheme({
    palette: {
        type: "dark"
    }
});
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (React.createElement(core_1.Typography, __assign({ component: "div", role: "tabpanel", hidden: value !== index, id: "vertical-tabpanel-" + index, "aria-labelledby": "vertical-tab-" + index }, other), value === index && React.createElement(Box_1.default, { p: 1 }, children)));
}
function innerProps(index) {
    return {
        id: "full-width-tab-" + index,
        "aria-controls": "full-width-tabpanel-" + index
    };
}
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            height: "85vh"
        },
        tabs: {
            borderRight: "1px solid " + theme.palette.divider,
            width: 130
        },
        tab: {
            height: 70,
            backgroundColor: "transparent",
            marginBottom: 10,
            border: "none",
            fontSize: 25,
            cursor: "pointer",
            outline: "none"
        },
        image: (_a = {
                position: "relative",
                height: 200,
                margin: 10
            },
            _a[theme.breakpoints.down("xs")] = {
                width: "100% !important",
                height: 100
            },
            _a["&:hover, &$focusVisible"] = {
                zIndex: 1,
                "& $imageBackdrop": {
                    opacity: 0.15
                },
                "& $imageMarked": {
                    opacity: 0
                },
                "& $imageTitle": {
                    border: "4px solid currentColor"
                }
            },
            _a),
        focusVisible: {},
        imageButton: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.common.white
        },
        imageSrc: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundPosition: "center 40%"
        },
        imageBackdrop: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.black,
            opacity: 0.8,
            transition: theme.transitions.create("opacity")
        },
        imageTitle: {
            position: "relative"
            // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
            //   6}px`
        },
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.white,
            position: "absolute",
            bottom: -2,
            left: "calc(50% - 9px)",
            transition: theme.transitions.create("opacity")
        },
        rootSearch: {
            display: "flex",
            alignItems: "center",
            width: 400,
            margin: "auto",
            marginBottom: 2
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1
        },
        iconButton: {
            padding: 10
        },
        divider: {
            height: 28,
            margin: 4
        },
        searchBar: {
            outline: "none",
            border: "none",
            width: 400
        },
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    });
});
var tabsList = [
    {
        tabname: "Phnoes",
        background: "red",
        color: "#fff",
        index: 0,
        category: [
            {
                cartname: "Iphone",
                categoryKey: 0,
                subcart: [
                    {
                        ItemName: "iphone 7s pluse",
                        productKey: 0,
                        sallingprice: 2000,
                        initalPrice: 2000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: [
                            200,
                            300,
                            500,
                            700,
                            235,
                            56,
                            34,
                            789,
                            555,
                            5678,
                            899,
                            8776,
                            54433
                        ]
                    },
                    {
                        ItemName: "iphone 5s pluse",
                        productKey: 1,
                        sallingprice: 1000,
                        initalPrice: 1000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: false,
                        multi: [234]
                    },
                    {
                        ItemName: "iphone 10s pluse",
                        productKey: 2,
                        sallingprice: 4000,
                        initalPrice: 4000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    },
                    {
                        ItemName: "iphone 57s pluse",
                        productKey: 3,
                        sallingprice: 2000,
                        initalPrice: 2000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: false,
                        multi: []
                    },
                    {
                        ItemName: "iphone 9s pluse",
                        productKey: 4,
                        sallingprice: 7000,
                        initalPrice: 7000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    },
                    {
                        ItemName: "iphone 25s pluse",
                        productKey: 5,
                        sallingprice: 1000,
                        initalPrice: 1000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: false,
                        multi: []
                    },
                    {
                        ItemName: "iphone 12s pluse",
                        productKey: 6,
                        sallingprice: 2000,
                        initalPrice: 2000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: false,
                        multi: []
                    },
                    {
                        ItemName: "iphone 50s pluse",
                        productKey: 7,
                        sallingprice: 10000,
                        initalPrice: 10000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    },
                    {
                        ItemName: "iphone 5s pluse",
                        productKey: 8,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: false,
                        multi: [444]
                    },
                    {
                        ItemName: "iphone 7s ",
                        productKey: 9,
                        sallingprice: 8000,
                        initalPrice: 8000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            },
            {
                cartname: "sumsaung",
                categoryKey: 1,
                subcart: [
                    {
                        ItemName: "iphone 8s pluse",
                        productKey: 10,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            },
            {
                cartname: "Itel",
                categoryKey: 2,
                subcart: [
                    {
                        ItemName: "iphone 9s pluse",
                        productKey: 11,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            },
            {
                cartname: "Huwawi",
                categoryKey: 3,
                subcart: [
                    {
                        ItemName: "iphone 10s pluse",
                        productKey: 13,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            }
        ]
    },
    {
        tabname: "Tablets",
        background: "#006B94",
        color: "#fff",
        index: 1,
        category: [
            {
                categoryKey: 0,
                cartname: "sumsaung",
                subcart: [
                    {
                        ItemName: "iphone 12s pluse",
                        productKey: 14,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            }
        ]
    },
    {
        tabname: "Covers",
        background: "green",
        color: "#fff",
        index: 2,
        category: [
            {
                categoryKey: 0,
                cartname: "sumsaung",
                subcart: [
                    {
                        ItemName: "iphone 12s pluse",
                        productKey: 15,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            }
        ]
    },
    {
        tabname: "Games",
        background: "orange",
        color: "#fff",
        index: 3,
        category: [
            {
                categoryKey: 0,
                cartname: "sumsaung",
                subcart: [
                    {
                        ItemName: "iphone 12s pluse",
                        productKey: 16,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            }
        ]
    },
    {
        tabname: "Screen Protectors",
        background: "#9A43A8",
        color: "#fff",
        index: 4,
        category: [
            {
                categoryKey: 0,
                cartname: "sumsaung",
                subcart: [
                    {
                        ItemName: "iphone 12s pluse",
                        productKey: 17,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            }
        ]
    },
    {
        tabname: "Watches",
        background: "green",
        color: "#fff",
        index: 5,
        category: [
            {
                categoryKey: 0,
                cartname: "sumsaung",
                subcart: [
                    {
                        ItemName: "iphone 12s pluse",
                        productKey: 18,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            }
        ]
    },
    {
        tabname: "Laptops",
        background: "#3b3b3b",
        color: "#fff",
        index: 6,
        category: [
            {
                categoryKey: 0,
                cartname: "sumsaung",
                subcart: [
                    {
                        ItemName: "iphone 12s pluse",
                        productKey: 19,
                        sallingprice: 5000,
                        initalPrice: 5000,
                        qnt: 1,
                        amountInstore: 9,
                        isTaxEnabled: true,
                        multi: []
                    }
                ]
            }
        ]
    }
];
var ItemsInCart = [];
exports.index = function (props) {
    var classes = useStyles();
    var _a = React.useState(0), value = _a[0], setValue = _a[1];
    var _b = React.useState(0), innerValue = _b[0], setInnerValue = _b[1];
    var _c = React.useState([]), multi = _c[0], setMulti = _c[1];
    var _d = React.useState(false), openMulti = _d[0], setOpenMulti = _d[1];
    var handleOpenMulti = function () {
        setOpenMulti(true);
    };
    var handleCloseMulti = function () {
        setOpenMulti(false);
    };
    var theme = styles_1.useTheme();
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    var handleInnerChange = function (event, newValue) {
        setInnerValue(newValue);
    };
    var handleChangeIndex = function (index) {
        setInnerValue(index);
    };
    var handleSelect = function (data) {
        if (data.multi.length === 0) {
            props.dispatchEvent({
                type: "ADDTOCART",
                payload: {
                    items: data
                }
            });
        }
        else {
            setMulti(data);
            handleOpenMulti();
        }
    };
    return (React.createElement("div", { style: { width: "100%", height: "77vh", display: "flex" } },
        React.createElement("div", { style: {} },
            React.createElement("div", { className: classes.root },
                React.createElement(Tabs_1.default, { orientation: "vertical", variant: "scrollable", value: value, onChange: handleChange, "aria-label": "Vertical tabs example", className: classes.tabs }, tabsList.map(function (itmes) { return (React.createElement(core_2.Button, { key: itmes.index, className: classes.tab, onClick: function () {
                        handleChange("", itmes.index);
                    }, style: {
                        // width: 150,
                        backgroundColor: itmes.background,
                        color: itmes.color
                    } },
                    React.createElement(core_1.Typography, { style: { width: "100%" } }, itmes.tabname))); })),
                React.createElement("div", { style: { width: 460, minWidth: 460 } }, tabsList.map(function (data) { return (React.createElement(TabPanel, { value: value, key: data.index, index: data.index },
                    React.createElement(core_2.AppBar, { position: "static", color: "primary" },
                        React.createElement(styles_2.ThemeProvider, { theme: darkTheme },
                            React.createElement(Tabs_1.default, { value: innerValue, indicatorColor: "secondary", textColor: "red", variant: "scrollable", scrollButtons: "auto", onChange: handleInnerChange, "aria-label": "full width tabs example" }, data.category.map(function (items) { return (React.createElement(Tab_1.default, __assign({ key: items.categoryKey, label: items.cartname }, innerProps(items.categoryKey)))); })))),
                    React.createElement(react_swipeable_views_1.default, { axis: theme.direction === "rtl" ? "x-reverse" : "x", index: innerValue, onChangeIndex: handleChangeIndex }, data.category.map(function (innerItem) { return (React.createElement("div", { style: { marginLeft: 20, height: "75vh" } }, innerItem.subcart.map(function (products) { return (React.createElement(ButtonBase_1.default, { focusRipple: true, key: products.productKey, className: classes.image, onClick: function () { return handleSelect(products); }, focusVisibleClassName: classes.focusVisible, style: {
                            width: "45%"
                        } },
                        React.createElement("span", { className: classes.imageSrc }),
                        React.createElement("span", { className: classes.imageBackdrop }),
                        React.createElement("span", { className: classes.imageButton },
                            React.createElement(core_1.Typography, { component: "span", variant: "h6", color: "inherit", className: classes.imageTitle },
                                products.ItemName,
                                React.createElement("span", { className: classes.imageMarked }),
                                React.createElement("div", null,
                                    React.createElement(NumberFormat, { value: products.initalPrice, displayType: "text", thousandSeparator: true, prefix: "K" })))))); }))); })))); })),
                React.createElement("div", null,
                    React.createElement(core_2.Modal, { "aria-labelledby": "simple-modal-title", "aria-describedby": "simple-modal-description", open: openMulti, className: classes.modal },
                        React.createElement(core_2.Paper, { style: { height: "55vh", width: "50%" } },
                            React.createElement("div", { style: {
                                    marginTop: 10,
                                    marginRight: 10,
                                    display: "flex",
                                    justifyContent: "space-between"
                                } },
                                React.createElement("div", { style: { marginLeft: 10 } },
                                    React.createElement(core_1.Typography, { variant: "h5", style: { color: "#aaaaaa" } }, "Select Price")),
                                React.createElement(core_2.IconButton, { onClick: handleCloseMulti },
                                    React.createElement(Clear_1.default, null))),
                            React.createElement("div", { style: { width: "100%" } },
                                React.createElement(MutiList_1.default, { multi: multi })))))))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme,
        SocketConn: state.SocketConn,
        Cart: state.Cart
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(exports.index);
//# sourceMappingURL=index.js.map