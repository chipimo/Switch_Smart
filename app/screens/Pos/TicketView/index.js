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
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var react_redux_1 = require("react-redux");
var FormControl_1 = require("@material-ui/core/FormControl");
var NativeSelect_1 = require("@material-ui/core/NativeSelect");
var styles_2 = require("@material-ui/core/styles");
var ListItemSecondaryAction_1 = require("@material-ui/core/ListItemSecondaryAction");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var IconButton_1 = require("@material-ui/core/IconButton");
var AddCircle_1 = require("@material-ui/icons/AddCircle");
var Menu_1 = require("@material-ui/core/Menu");
var Button_1 = require("@material-ui/core/Button");
var Delete_1 = require("@material-ui/icons/Delete");
var Add_1 = require("@material-ui/icons/Add");
var RemoveCircle_1 = require("@material-ui/icons/RemoveCircle");
var Drawer_1 = require("@material-ui/core/Drawer");
var close_1 = require("@material-ui/icons/close");
var ShoppingCart_1 = require("@material-ui/icons/ShoppingCart");
var core_1 = require("@material-ui/core");
var Modal_1 = require("@material-ui/core/Modal");
var Backdrop_1 = require("@material-ui/core/Backdrop");
var Fade_1 = require("@material-ui/core/Fade");
var Currency = require("react-currency-formatter");
var moment = require("moment");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    botton1: {
        width: 120,
        height: 50,
        marginRight: 5,
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "#9A43A8",
        "&:hover": {
            backgroundColor: "#BB81C5"
        }
    },
    botton2: {
        width: 120,
        height: 50,
        marginRight: 5,
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "#E87D0D",
        "&:hover": {
            backgroundColor: "#BB81C5"
        }
    },
    botton3: {
        width: 120,
        height: 50,
        marginRight: 5,
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "#0D6FBD",
        "&:hover": {
            backgroundColor: "#BB81C5"
        }
    },
    botton4: {
        width: 300,
        height: 50,
        marginRight: 20,
        color: "#fff",
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "#FF5555",
        "&:hover": {
            backgroundColor: "#FF0000"
        }
    },
    botton5: {
        width: 300,
        height: 50,
        marginRight: 20,
        color: "#fff",
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "#17A05D",
        "&:hover": {
            backgroundColor: "#64BF93"
        }
    },
    list: {
        width: 950
    },
    bottom2: {
        width: "auto",
        height: 680
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        color: "#fff"
    },
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    totalsView: {
        backgroundColor: theme.palette.background.paper
    },
    bottom: {
        width: "auto",
        height: 680
    },
    margin: {
        margin: theme.spacing(1)
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}); });
var darkTheme = styles_2.createMuiTheme({
    palette: {
        type: "dark"
    }
});
var index = function (props) {
    var _a = React.useState({
        ticketType: "tax_invoice",
        customer: "Walk in customer"
    }), state = _a[0], setState = _a[1];
    var _b = React.useState(0), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var classes = useStyles();
    var _c = React.useState(props.Cart.total), GrandTotal = _c[0], setGrandTotal = _c[1];
    var _d = React.useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var _e = React.useState(null), anchorEl2 = _e[0], setAnchorEl2 = _e[1];
    var _f = React.useState(1), qu = _f[0], setQu = _f[1];
    var _g = React.useState(0), StockInstore = _g[0], setStockInstore = _g[1];
    var _h = React.useState(0), totalTax = _h[0], setTotalTax = _h[1];
    var _j = React.useState(false), Paid = _j[0], isPaid = _j[1];
    var _k = React.useState(false), amountPaidErr = _k[0], setamountPaidErr = _k[1];
    var _l = React.useState({
        top: false,
        left: false,
        bottom: false,
        bottom2: false,
        right: false
    }), Drawerstate = _l[0], setDrawerState = _l[1];
    var _m = React.useState({
        amount: "",
        discount: ""
    }), values = _m[0], setValues = _m[1];
    var toggleDrawer = function (side, open) { return function (event) {
        var _a;
        if (event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerState(__assign({}, Drawerstate, (_a = {}, _a[side] = open, _a)));
        setGrandTotal(props.Cart.total);
    }; };
    var _o = React.useState(false), open = _o[0], setOpen = _o[1];
    var _p = React.useState(""), AlertMsg = _p[0], setAlertMsg = _p[1];
    var _q = React.useState(0), ChangeDue = _q[0], setChangeDue = _q[1];
    var _r = React.useState(0), BalanceDue = _r[0], setBalanceDue = _r[1];
    var handleOpen = function (msg) {
        setOpen(true);
        setAlertMsg(msg);
    };
    var handleCloseAlert = function () {
        setOpen(false);
    };
    var _s = React.useState({
        items: "",
        productKey: "",
        amountInstore: 0
    }), nodeCall = _s[0], setNodeCall = _s[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleClick2 = function (event) {
        setAnchorEl2(event.currentTarget);
    };
    var handleClose2 = function () {
        setAnchorEl2(null);
    };
    var handleListItemClick = function (event, index) {
        setSelectedIndex(index);
    };
    var handlePaidChange = function (prop) { return function (event) {
        var _a;
        setValues(__assign({}, values, (_a = {}, _a[prop] = event.target.value, _a)));
        if (prop === "discount") {
            if (event.target.value !== "") {
                var amount = props.Cart.total - parseInt(event.target.value);
                setGrandTotal(amount);
            }
            else {
                setGrandTotal(props.Cart.total);
            }
        }
        else {
            setamountPaidErr(false);
            var Change = parseInt(event.target.value) - props.Cart.total;
            var Balance = props.Cart.total - parseInt(event.target.value);
            if (Change > 0) {
                setChangeDue(Change);
            }
            else {
                setChangeDue(0);
            }
            if (Balance > 0) {
                setBalanceDue(Balance);
            }
            else {
                setBalanceDue(0);
            }
        }
    }; };
    var handleChange = function (name) { return function (event) {
        var _a;
        setState(__assign({}, state, (_a = {}, _a[name] = event.target.value, _a)));
        if (name === "ticketType") {
            props.dispatchEvent({
                type: "SETTICKETCONFIG",
                payload: {
                    taxInvoice: event.target.value === "tax_invoice" ? true : false,
                    quotation: event.target.value === "quotation" ? true : false,
                    apply: false,
                    price: 0.0,
                    note: ""
                }
            });
        }
    }; };
    React.useEffect(function () {
        // props.dispatchEvent({ type: "RESTALL" });
        if (props.Cart.items)
            CalculateTax(props.Cart.total);
    }, [props]);
    var CalculateTax = function (sellingPrice) {
        var tax_rate = props.Tax.tax_rate / 100;
        var totalTaxRate = sellingPrice * tax_rate;
        setTotalTax(totalTaxRate);
        // console.log(totalTaxRate);
    };
    var handleQchange = function (type) {
        if (type === "add") {
            if (StockInstore === 0) {
                alert("Out of stock");
            }
            else {
                props.dispatchEvent({
                    type: "ADDQU",
                    items: nodeCall.items,
                    productKey: nodeCall.productKey,
                    amountInstore: nodeCall.amountInstore
                });
                setStockInstore(StockInstore - 1);
                setQu(qu + 1);
                CalculateTax(props.Cart.total);
            }
        }
        else if (type === "remove") {
            props.dispatchEvent({
                type: "REMOVEQU",
                items: nodeCall.items,
                productKey: nodeCall.productKey
            });
            if (qu >= 2)
                setQu(qu - 1);
            CalculateTax(props.Cart.total);
        }
        else {
            props.dispatchEvent({
                type: "DELETEQU",
                items: nodeCall.items,
                productKey: nodeCall.productKey
            });
            handleClose();
            CalculateTax(props.Cart.total);
        }
    };
    // Make Cash payment
    var makePayment = function (en) {
        var toPrint = [];
        // console.log(info);
        props.Cart.items.map(function (items) {
            toPrint.push({
                ItemName: items.ItemName,
                Qty: items.qnt,
                Price: items.sallingprice
            });
        });
        if (toPrint.length === 0) {
            return alert("Opps we are sorry we can't process an empty list ! selecte items first");
        }
        props.dispatchEvent({
            type: "SAVETICKET",
            defaultList: props.TicketOut.Tickets,
            payload: {
                ticketList: props.Cart.items,
                toPrint: toPrint,
                Customer: { name: state.customer, number: "" },
                GrandTotal: en === "mutiple" ? GrandTotal : props.Cart.total,
                AmountPaid: en === "mutiple" ? values.amount : props.Cart.total,
                ChangeDue: ChangeDue,
                Balance: BalanceDue,
                Date: moment().format("ddd MMM Do, YYYY"),
                user: "Melvin",
                paymentType: en === "mutiple" || en === "cash" ? "Cash" : "Credit Card",
                isMuti: en,
                isTaxInvoice: props.TicketConfig.taxInvoice
            }
        });
        setBalanceDue(0);
        setChangeDue(0);
        // PrintTicket({
        //   ticketList: props.Cart.items,
        //   GrandTotal: GrandTotal,
        //   AmountPaid: values.amount,
        //   ChangeDue: ChangeDue,
        //   Balance: BalanceDue,
        //   user: "Melvin",
        //   paymentType: en === "mutiple" || en === "cash" ? "Cash" : "Credit Card",
        //   isMuti: en,
        //   isTaxInvoice: props.TicketConfig.taxInvoice
        // });
        setTimeout(function () {
            RestCartList();
        }, 900);
        isPaid(true);
    };
    // Rest Cart
    var RestCartList = function () {
        props.dispatchEvent({
            type: "RESTATECART"
        });
        props.dispatchEvent({
            type: "CLEARPRINT"
        });
    };
    // Print Ticket
    var PrintTicket = function (info) {
        // var toPrint = [];
        // // console.log(info);
        // info.ticketList.map(items => {
        //   toPrint.push({
        //     ItemName: items.ItemName,
        //     Qty: items.qnt,
        //     Price: items.sallingprice
        //   });
        // });
        // if (toPrint.length === 0) {
        //   return alert(
        //     "Opps we are sorry we can't process an empty list ! selecte items first"
        //   );
        // }
        // ipcRenderer.send("do_print_receipt", {
        //   GrandTotal:
        //     info.isMuti === "mutiple" ? info.GrandTotal : props.Cart.total,
        //   AmountPaid:
        //     info.isMuti === "mutiple" ? info.AmountPaid : props.Cart.total,
        //   ChangeDue: info.ChangeDue,
        //   Balance: info.Balance,
        //   user: info.user,
        //   paymentType: info.paymentType,
        //   isTaxInvoice: info.isTaxInvoice,
        //   taxRate: props.Tax.tax_rate,
        //   totalTax,
        //   items: toPrint
        // });
    };
    return (React.createElement("div", null,
        React.createElement("div", { style: {
                padding: 2,
                width: "100%",
                backgroundColor: props.TicketConfig.taxInvoice
                    ? "#9A4200"
                    : "#9A4200",
                color: "#fff"
            } },
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                React.createElement(styles_2.ThemeProvider, { theme: darkTheme },
                    React.createElement(FormControl_1.default, { color: "secondary", className: classes.formControl },
                        React.createElement(NativeSelect_1.default, { value: state.ticketType, onChange: handleChange("ticketType"), name: "ticketType", inputProps: { "aria-label": "ticketType" } },
                            React.createElement("option", { value: "tax_invoice" }, "Tax Invoice Ticket"),
                            React.createElement("option", { value: "quotation" }, "Quotation Ticket")))),
                React.createElement(styles_2.ThemeProvider, { theme: darkTheme },
                    React.createElement(FormControl_1.default, { color: "secondary", className: classes.formControl },
                        React.createElement(NativeSelect_1.default, { value: state.customer, onChange: handleChange("customer"), name: "ticketType", inputProps: { "aria-label": "ticketType" } },
                            React.createElement("option", { value: "customer" }, "Walk in customer"),
                            props.Customers.data.map(function (customers) {
                                return (React.createElement("option", { value: customers.name }, customers.customerName));
                            })))))),
        React.createElement("div", { style: { height: "58vh" } },
            React.createElement("div", { className: classes.root, style: {
                    height: "43vh",
                    overflow: "auto",
                    backgroundColor: props.Theme.theme === "light" ? "#EEEEEE" : "#0E0E0E"
                } },
                React.createElement(List_1.default, { component: "nav", "aria-label": "main mailbox folders" }, props.Cart.items.map(function (items) {
                    // console.log(items);
                    return (React.createElement("div", { key: items.productKey },
                        React.createElement(ListItem_1.default, { button: true, selected: selectedIndex === items.productKey, onClick: function (event) {
                                handleListItemClick(event, items.productKey);
                                setStockInstore(items.amountInstore);
                                setQu(items.qnt);
                                setNodeCall({
                                    items: props.Cart.items,
                                    productKey: items.productKey,
                                    amountInstore: items.amountInstore
                                });
                            } },
                            React.createElement(ListItemIcon_1.default, null,
                                React.createElement(IconButton_1.default, { "aria-controls": "simple-menu", "aria-haspopup": "true", onClick: handleClick },
                                    React.createElement(AddCircle_1.default, null))),
                            React.createElement(ListItemText_1.default, { primary: React.createElement(Typography_1.default, { variant: "h6" }, items.ItemName), secondary: "we have added " + items.qnt + " and " + items.amountInstore + " left" }),
                            React.createElement(ListItemSecondaryAction_1.default, null,
                                React.createElement(Typography_1.default, { variant: "h6" },
                                    React.createElement(Currency, { locale: "en", quantity: items.sallingprice, symbol: "K" }))))));
                }))),
            React.createElement(core_1.Divider, null),
            React.createElement(core_1.Divider, null),
            React.createElement(core_1.Paper, { className: classes.totalsView },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                    React.createElement(Typography_1.default, { style: { marginLeft: 5 }, variant: "h6" }, "Ticket Total"),
                    React.createElement(Typography_1.default, { style: { marginRight: 5 }, variant: "h6" },
                        React.createElement(Currency, { locale: "en", quantity: props.Cart.total, symbol: "K" }))),
                React.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "space-between"
                    } },
                    React.createElement(Typography_1.default, { style: { marginLeft: 5 }, variant: "h6" }, "Tax Total"),
                    React.createElement(Typography_1.default, { style: { marginRight: 5 }, variant: "h6" },
                        React.createElement(Currency, { locale: "en", quantity: totalTax, symbol: "K" }))),
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                    React.createElement(Typography_1.default, { style: { color: "#FF5555", marginLeft: 5 }, variant: "h5" }, "Balance"),
                    React.createElement(Typography_1.default, { style: { color: "#FF5555", marginRight: 5 }, variant: "h5" },
                        React.createElement(Currency, { locale: "en", quantity: props.Cart.total, symbol: "K" }))))),
        React.createElement("div", { style: { paddingBottom: 10 } },
            state.ticketType === "quotation" ? (React.createElement("div", null,
                React.createElement(Button_1.default, { variant: "contained", className: classes.botton5 },
                    React.createElement(Typography_1.default, null, "Print Out Quotation ")))) : (React.createElement("div", { style: { marginLeft: 5 } },
                React.createElement(Button_1.default, { disabled: props.TicketToPrint.active, onClick: toggleDrawer("bottom", true), className: classes.botton1, style: {
                        backgroundColor: props.TicketToPrint.active
                            ? "#CCCED7"
                            : "#9A43A8"
                    } },
                    React.createElement(Typography_1.default, { style: { color: "#fff" } }, "Mutiple Pay")),
                React.createElement(Button_1.default, { disabled: props.TicketToPrint.active, onClick: function (event) {
                        handleClick2(event);
                        makePayment("cash");
                    }, className: classes.botton2, style: {
                        backgroundColor: props.TicketToPrint.active
                            ? "#CCCED7"
                            : "#E87D0D"
                    } },
                    React.createElement(Typography_1.default, { style: { color: "#fff" }, variant: "h6" }, "Cash")),
                React.createElement(Button_1.default, { disabled: props.TicketToPrint.active, onClick: function (event) {
                        handleClick2(event);
                        makePayment("card");
                    }, className: classes.botton3, style: {
                        backgroundColor: props.TicketToPrint.active
                            ? "#CCCED7"
                            : "#0D6FBD"
                    } },
                    React.createElement(Typography_1.default, { style: { color: "#fff" }, variant: "subtitle1" }, "Credit Card")),
                React.createElement(Drawer_1.default, { anchor: "bottom", open: Drawerstate.bottom, onClose: toggleDrawer("bottom", false) },
                    React.createElement("div", { className: classes.bottom },
                        React.createElement("div", { style: {
                                marginTop: 10,
                                marginRight: 10,
                                display: "flex",
                                justifyContent: "space-between"
                            } },
                            React.createElement("div", { style: { marginLeft: 20 } },
                                React.createElement(Typography_1.default, { style: { color: "green" }, variant: "h4" }, "Ticket Checkout")),
                            React.createElement(IconButton_1.default, { onClick: toggleDrawer("bottom", false) },
                                React.createElement(close_1.default, null))),
                        React.createElement("div", { style: { padding: 10, display: "flex" } },
                            React.createElement(core_1.Paper, { style: {
                                    width: "40%",
                                    height: "73vh",
                                    overflow: "auto",
                                    backgroundColor: props.Theme.theme === "light" ? "#EEEEEE" : "#212121"
                                } },
                                React.createElement(List_1.default, { component: "nav", "aria-label": "main mailbox folders" }, props.Cart.items.map(function (items) {
                                    return (React.createElement("div", { key: items.productKey },
                                        React.createElement(ListItem_1.default, { button: true, selected: selectedIndex === items.productKey, onClick: function (event) {
                                                handleListItemClick(event, items.productKey);
                                                setStockInstore(parseInt(items.amountInstore));
                                                setQu(items.qnt);
                                                setNodeCall({
                                                    items: props.Cart.items,
                                                    productKey: items.productKey,
                                                    amountInstore: items.amountInstore
                                                });
                                            } },
                                            React.createElement(ListItemIcon_1.default, null,
                                                React.createElement(ShoppingCart_1.default, null)),
                                            React.createElement(ListItemText_1.default, { primary: React.createElement(Typography_1.default, { variant: "h6" }, items.ItemName), secondary: "we have added " + items.qnt + " and " + items.amountInstore + " left" }),
                                            React.createElement(ListItemSecondaryAction_1.default, null,
                                                React.createElement(Typography_1.default, { variant: "h6" },
                                                    React.createElement(Currency, { locale: "en", quantity: items.sallingprice, symbol: "K" }))))));
                                }))),
                            React.createElement("div", { style: {
                                    width: "60%",
                                    padding: 10
                                } },
                                React.createElement("div", { style: {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between"
                                    } },
                                    React.createElement(Typography_1.default, { variant: "h2", style: { color: "#FF8D8D" } }, "Total"),
                                    React.createElement("div", null,
                                        React.createElement(Typography_1.default, { variant: "h2", style: { color: "#FF8D8D" } },
                                            React.createElement(Currency, { locale: "en", quantity: GrandTotal, symbol: "K" })),
                                        React.createElement("div", { style: {
                                                width: 300,
                                                backgroundColor: "#494B4A",
                                                height: 2
                                            } }))),
                                React.createElement("div", { style: {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: 20
                                    } },
                                    React.createElement(Typography_1.default, { variant: "h4", style: {
                                            color: props.Theme.theme === "light"
                                                ? "#525453"
                                                : "#EBECEB",
                                            marginLeft: 20
                                        } }, "Amount Paid"),
                                    React.createElement("div", null,
                                        React.createElement(FormControl_1.default, { fullWidth: true, className: classes.margin, variant: "outlined" },
                                            React.createElement(core_1.InputLabel, { htmlFor: "outlined-adornment-amount" }, "Amount"),
                                            React.createElement(core_1.OutlinedInput, { style: { height: 70, fontSize: 25 }, id: "outlined-adornment-amount", value: values.amount, onChange: handlePaidChange("amount"), error: amountPaidErr, startAdornment: React.createElement(core_1.InputAdornment, { position: "start" }, "K"), labelWidth: 60 })))),
                                React.createElement("div", { style: {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: 15
                                    } },
                                    React.createElement(Typography_1.default, { variant: "h4", style: {
                                            color: props.Theme.theme === "light"
                                                ? "#525453"
                                                : "#EBECEB",
                                            marginLeft: 20
                                        } }, "Discount"),
                                    React.createElement("div", null,
                                        React.createElement(FormControl_1.default, { fullWidth: true, className: classes.margin, variant: "outlined" },
                                            React.createElement(core_1.InputLabel, { htmlFor: "outlined-adornment-discount" }, "Discount"),
                                            React.createElement(core_1.OutlinedInput, { style: { height: 70, fontSize: 25 }, id: "outlined-adornment-discount", value: values.discount, onChange: handlePaidChange("discount"), startAdornment: React.createElement(core_1.InputAdornment, { position: "start" }, "K"), labelWidth: 60 })))),
                                React.createElement("div", { style: { marginLeft: 20, width: "80%", marginTop: 20 } },
                                    React.createElement("div", { style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        } },
                                        React.createElement(Typography_1.default, { variant: "h6" }, "Change due:"),
                                        React.createElement(Typography_1.default, { variant: "h6" },
                                            React.createElement(Currency, { locale: "en", quantity: ChangeDue, symbol: "K" }))),
                                    React.createElement("div", { style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        } },
                                        React.createElement(Typography_1.default, { variant: "h6" }, "Grand Total:"),
                                        React.createElement(Typography_1.default, { variant: "h6" },
                                            React.createElement(Currency, { locale: "en", quantity: GrandTotal, symbol: "K" }))),
                                    React.createElement("div", { style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        } },
                                        React.createElement(Typography_1.default, { variant: "h6" }, "Balance due:"),
                                        React.createElement(Typography_1.default, { variant: "h6" },
                                            React.createElement(Currency, { locale: "en", quantity: BalanceDue, symbol: "K" })))),
                                React.createElement("div", { style: { marginTop: 50 } },
                                    React.createElement(Button_1.default, { onClick: function (event) {
                                            if (values.amount === "") {
                                                setamountPaidErr(true);
                                                return;
                                            }
                                            makePayment("mutiple");
                                            handleClick2(event);
                                        }, style: { height: 70, marginRight: 10 }, variant: "contained", color: "primary", disabled: Paid },
                                        React.createElement(Typography_1.default, { variant: "h5" }, "Cash payment")),
                                    React.createElement(Modal_1.default, { "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", className: classes.modal, open: open, onClose: handleCloseAlert, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
                                            timeout: 500
                                        } },
                                        React.createElement(Fade_1.default, { in: open },
                                            React.createElement("div", { className: classes.paper },
                                                React.createElement(Typography_1.default, { variant: "h6" }, AlertMsg)))))))),
                    React.createElement(Menu_1.default, { id: "simple-menu", anchorEl: anchorEl2, keepMounted: true, open: Boolean(anchorEl2) },
                        React.createElement("div", { style: {
                                width: 250,
                                height: 100,
                                textAlign: "center",
                                justifyContent: "center"
                            } },
                            React.createElement("div", { style: { marginTop: 40 } },
                                React.createElement(Typography_1.default, { variant: "h6" }, "Payment Successful")),
                            React.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: function (event) {
                                    handleClose2();
                                    isPaid(false);
                                }, style: { width: 200 } }, "Okay")))))),
            React.createElement("div", { style: { marginTop: 5, marginBottom: 5, display: "flex" } },
                React.createElement(Button_1.default, { onClick: RestCartList, variant: "contained", className: classes.botton4 },
                    React.createElement(Typography_1.default, null, "Close")),
                React.createElement(Button_1.default, { onClick: RestCartList, variant: "contained", color: "primary", disabled: props.TicketToPrint.active ? false : true, style: { width: 145 } },
                    React.createElement(Typography_1.default, null, "Print")))),
        React.createElement(Menu_1.default, { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose },
            React.createElement("div", { style: { padding: 10 } },
                React.createElement("div", { style: { display: "flex", marginBottom: 20 } },
                    React.createElement(IconButton_1.default, { onClick: function () { return handleQchange("add"); }, "aria-label": "delete" },
                        React.createElement(Add_1.default, null)),
                    React.createElement(Typography_1.default, { variant: "h5", style: { marginTop: 5 } }, qu),
                    React.createElement(IconButton_1.default, { onClick: function () { return handleQchange("remove"); }, "aria-label": "delete" },
                        React.createElement(RemoveCircle_1.default, null))),
                React.createElement(Button_1.default, { onClick: function () { return handleQchange("delete"); }, variant: "contained", color: "secondary", startIcon: React.createElement(Delete_1.default, null) }, "Delete")))));
};
function mapStateToProps(state) {
    return {
        TicketConfig: state.TicketConfig,
        Cart: state.Cart,
        Tax: state.Tax,
        Customers: state.Customers,
        TicketToPrint: state.TicketToPrint,
        Theme: state.Theme,
        TicketOut: state.TicketOut
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(index);
//# sourceMappingURL=index.js.map