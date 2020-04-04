import React = require("react");
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/RemoveCircle";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Paper,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Divider
} from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Currency = require("react-currency-formatter");
const moment = require("moment");

const useStyles = makeStyles(theme => ({
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
}));

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const index = props => {
  const [state, setState] = React.useState({
    ticketType: "tax_invoice",
    customer: "Walk in customer"
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const classes = useStyles();
  const [GrandTotal, setGrandTotal] = React.useState(props.Cart.total);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [qu, setQu] = React.useState(1);
  const [StockInstore, setStockInstore] = React.useState(0);
  const [totalTax, setTotalTax] = React.useState(0);

  const [Paid, isPaid] = React.useState(false);

  const [amountPaidErr, setamountPaidErr] = React.useState(false);

  const [Drawerstate, setDrawerState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    bottom2: false,
    right: false
  });
  const [values, setValues] = React.useState({
    amount: "",
    discount: ""
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...Drawerstate, [side]: open });
    setGrandTotal(props.Cart.total);
  };
  const [open, setOpen] = React.useState(false);
  const [AlertMsg, setAlertMsg] = React.useState("");
  const [ChangeDue, setChangeDue] = React.useState(0);
  const [BalanceDue, setBalanceDue] = React.useState(0);

  const handleOpen = msg => {
    setOpen(true);
    setAlertMsg(msg);
  };

  const handleCloseAlert = () => {
    setOpen(false);
  };

  const [nodeCall, setNodeCall] = React.useState({
    items: "",
    productKey: "",
    amountInstore: 0
  });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handlePaidChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    if (prop === "discount") {
      if (event.target.value !== "") {
        var amount = props.Cart.total - parseInt(event.target.value);
        setGrandTotal(amount);
      } else {
        setGrandTotal(props.Cart.total);
      }
    } else {
      setamountPaidErr(false);

      var Change = parseInt(event.target.value) - props.Cart.total;
      var Balance = props.Cart.total - parseInt(event.target.value);

      if (Change > 0) {
        setChangeDue(Change);
      } else {
        setChangeDue(0);
      }
      if (Balance > 0) {
        setBalanceDue(Balance);
      } else {
        setBalanceDue(0);
      }
    }
  };

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
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
  };

  React.useEffect(() => {
    // props.dispatchEvent({ type: "RESTALL" });
    if (props.Cart.items) CalculateTax(props.Cart.total);
  }, [props]);

  const CalculateTax = sellingPrice => {
    var tax_rate = props.Tax.tax_rate / 100;
    var totalTaxRate = sellingPrice * tax_rate;
    setTotalTax(totalTaxRate);
    // console.log(totalTaxRate);
  };

  const handleQchange = type => {
    if (type === "add") {
      if (StockInstore === 0) {
        alert("Out of stock");
      } else {
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
    } else if (type === "remove") {
      props.dispatchEvent({
        type: "REMOVEQU",
        items: nodeCall.items,
        productKey: nodeCall.productKey
      });
      if (qu >= 2) setQu(qu - 1);
      CalculateTax(props.Cart.total);
    } else {
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

  const makePayment = en => {
    var toPrint = [];
    // console.log(info);
    props.Cart.items.map(items => {
      toPrint.push({
        ItemName: items.ItemName,
        Qty: items.qnt,
        Price: items.sallingprice
      });
    });

    if (toPrint.length === 0) {
      return alert(
        "Opps we are sorry we can't process an empty list ! selecte items first"
      );
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

    setTimeout(() => {
      RestCartList();
    }, 900);

    isPaid(true);
  };

  // Rest Cart

  const RestCartList = () => {
    props.dispatchEvent({
      type: "RESTATECART"
    });
    props.dispatchEvent({
      type: "CLEARPRINT"
    });
  };

  // Print Ticket

  const PrintTicket = info => {
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

  return (
    <div>
      <div
        style={{
          padding: 2,
          width: "100%",
          backgroundColor: props.TicketConfig.taxInvoice
            ? "#9A4200"
            : "#9A4200",
          color: "#fff"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ThemeProvider theme={darkTheme}>
            <FormControl color="secondary" className={classes.formControl}>
              <NativeSelect
                value={state.ticketType}
                onChange={handleChange("ticketType")}
                name="ticketType"
                inputProps={{ "aria-label": "ticketType" }}
              >
                <option value="tax_invoice">Tax Invoice Ticket</option>
                <option value="quotation">Quotation Ticket</option>
              </NativeSelect>
            </FormControl>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <FormControl color="secondary" className={classes.formControl}>
              <NativeSelect
                value={state.customer}
                onChange={handleChange("customer")}
                name="ticketType"
                inputProps={{ "aria-label": "ticketType" }}
              >
                <option value="customer">Walk in customer</option>
                {props.Customers.data.map(customers => {
                  return (
                    <option value={customers.name}>
                      {customers.customerName}
                    </option>
                  );
                })}
              </NativeSelect>
            </FormControl>
          </ThemeProvider>
        </div>
      </div>
      <div style={{ height: "58vh" }}>
        <div
          className={classes.root}
          style={{
            height: "43vh",
            overflow: "auto",
            backgroundColor:
              props.Theme.theme === "light" ? "#EEEEEE" : "#0E0E0E"
          }}
        >
          <List component="nav" aria-label="main mailbox folders">
            {props.Cart.items.map(items => {
              // console.log(items);

              return (
                <div key={items.productKey}>
                  <ListItem
                    button
                    selected={selectedIndex === items.productKey}
                    onClick={event => {
                      handleListItemClick(event, items.productKey);
                      setStockInstore(items.amountInstore);
                      setQu(items.qnt);
                      setNodeCall({
                        items: props.Cart.items,
                        productKey: items.productKey,
                        amountInstore: items.amountInstore
                      });
                    }}
                  >
                    <ListItemIcon>
                      <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6">{items.ItemName}</Typography>
                      }
                      secondary={`we have added ${items.qnt} and ${items.amountInstore} left`}
                    />
                    <ListItemSecondaryAction>
                      <Typography variant="h6">
                        <Currency
                          locale="en"
                          quantity={items.sallingprice}
                          symbol="K"
                        />
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
        <Divider />
        <Divider />
        <Paper className={classes.totalsView}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography style={{ marginLeft: 5 }} variant="h6">
              Ticket Total
            </Typography>
            <Typography style={{ marginRight: 5 }} variant="h6">
              <Currency locale="en" quantity={props.Cart.total} symbol="K" />
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Typography style={{ marginLeft: 5 }} variant="h6">
              Tax Total
            </Typography>
            <Typography style={{ marginRight: 5 }} variant="h6">
              <Currency locale="en" quantity={totalTax} symbol="K" />
            </Typography>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ color: "#FF5555", marginLeft: 5 }}
              variant="h5"
            >
              Balance
            </Typography>
            <Typography
              style={{ color: "#FF5555", marginRight: 5 }}
              variant="h5"
            >
              <Currency locale="en" quantity={props.Cart.total} symbol="K" />
            </Typography>
          </div>
        </Paper>
      </div>
      <div style={{ paddingBottom: 10 }}>
        {state.ticketType === "quotation" ? (
          <div>
            <Button variant="contained" className={classes.botton5}>
              <Typography>Print Out Quotation </Typography>
            </Button>
          </div>
        ) : (
          <div style={{ marginLeft: 5 }}>
            <Button
              disabled={props.TicketToPrint.active}
              onClick={toggleDrawer("bottom", true)}
              className={classes.botton1}
              style={{
                backgroundColor: props.TicketToPrint.active
                  ? "#CCCED7"
                  : "#9A43A8"
              }}
            >
              <Typography style={{ color: "#fff" }}>Mutiple Pay</Typography>
            </Button>
            <Button
              disabled={props.TicketToPrint.active}
              onClick={event => {
                handleClick2(event);
                makePayment("cash");
              }}
              className={classes.botton2}
              style={{
                backgroundColor: props.TicketToPrint.active
                  ? "#CCCED7"
                  : "#E87D0D"
              }}
            >
              <Typography style={{ color: "#fff" }} variant="h6">
                Cash
              </Typography>
            </Button>
            <Button
              disabled={props.TicketToPrint.active}
              onClick={event => {
                handleClick2(event);
                makePayment("card");
              }}
              className={classes.botton3}
              style={{
                backgroundColor: props.TicketToPrint.active
                  ? "#CCCED7"
                  : "#0D6FBD"
              }}
            >
              <Typography style={{ color: "#fff" }} variant="subtitle1">
                Credit Card
              </Typography>
            </Button>
            {/* sider bottom sales reports */}
            <Drawer
              anchor="bottom"
              open={Drawerstate.bottom}
              onClose={toggleDrawer("bottom", false)}
            >
              <div className={classes.bottom}>
                {/* <Customer /> */}
                <div
                  style={{
                    marginTop: 10,
                    marginRight: 10,
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ marginLeft: 20 }}>
                    <Typography style={{ color: "green" }} variant="h4">
                      Ticket Checkout
                    </Typography>
                  </div>
                  <IconButton onClick={toggleDrawer("bottom", false)}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div style={{ padding: 10, display: "flex" }}>
                  <Paper
                    style={{
                      width: "40%",
                      height: "73vh",
                      overflow: "auto",
                      backgroundColor:
                        props.Theme.theme === "light" ? "#EEEEEE" : "#212121"
                    }}
                  >
                    <List component="nav" aria-label="main mailbox folders">
                      {props.Cart.items.map(items => {
                        return (
                          <div key={items.productKey}>
                            <ListItem
                              button
                              selected={selectedIndex === items.productKey}
                              onClick={event => {
                                handleListItemClick(event, items.productKey);
                                setStockInstore(parseInt(items.amountInstore));
                                setQu(items.qnt);
                                setNodeCall({
                                  items: props.Cart.items,
                                  productKey: items.productKey,
                                  amountInstore: items.amountInstore
                                });
                              }}
                            >
                              <ListItemIcon>
                                <ShoppingCartIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Typography variant="h6">
                                    {items.ItemName}
                                  </Typography>
                                }
                                secondary={`we have added ${items.qnt} and ${items.amountInstore} left`}
                              />
                              <ListItemSecondaryAction>
                                <Typography variant="h6">
                                  <Currency
                                    locale="en"
                                    quantity={items.sallingprice}
                                    symbol="K"
                                  />
                                </Typography>
                              </ListItemSecondaryAction>
                            </ListItem>
                          </div>
                        );
                      })}
                    </List>
                  </Paper>
                  <div
                    style={{
                      width: "60%",
                      padding: 10
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <Typography variant="h2" style={{ color: "#FF8D8D" }}>
                        Total
                      </Typography>
                      <div>
                        <Typography variant="h2" style={{ color: "#FF8D8D" }}>
                          <Currency
                            locale="en"
                            quantity={GrandTotal}
                            symbol="K"
                          />
                        </Typography>
                        <div
                          style={{
                            width: 300,
                            backgroundColor: "#494B4A",
                            height: 2
                          }}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 20
                      }}
                    >
                      <Typography
                        variant="h4"
                        style={{
                          color:
                            props.Theme.theme === "light"
                              ? "#525453"
                              : "#EBECEB",
                          marginLeft: 20
                        }}
                      >
                        Amount Paid
                      </Typography>
                      <div>
                        <FormControl
                          fullWidth
                          className={classes.margin}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-amount">
                            Amount
                          </InputLabel>
                          <OutlinedInput
                            style={{ height: 70, fontSize: 25 }}
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handlePaidChange("amount")}
                            error={amountPaidErr}
                            startAdornment={
                              <InputAdornment position="start">
                                K
                              </InputAdornment>
                            }
                            labelWidth={60}
                          />
                        </FormControl>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 15
                      }}
                    >
                      <Typography
                        variant="h4"
                        style={{
                          color:
                            props.Theme.theme === "light"
                              ? "#525453"
                              : "#EBECEB",
                          marginLeft: 20
                        }}
                      >
                        Discount
                      </Typography>
                      <div>
                        <FormControl
                          fullWidth
                          className={classes.margin}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-discount">
                            Discount
                          </InputLabel>
                          <OutlinedInput
                            style={{ height: 70, fontSize: 25 }}
                            id="outlined-adornment-discount"
                            value={values.discount}
                            onChange={handlePaidChange("discount")}
                            startAdornment={
                              <InputAdornment position="start">
                                K
                              </InputAdornment>
                            }
                            labelWidth={60}
                          />
                        </FormControl>
                      </div>
                    </div>

                    <div
                      style={{ marginLeft: 20, width: "80%", marginTop: 20 }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography variant="h6">Change due:</Typography>
                        <Typography variant="h6">
                          <Currency
                            locale="en"
                            quantity={ChangeDue}
                            symbol="K"
                          />
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography variant="h6">Grand Total:</Typography>
                        <Typography variant="h6">
                          <Currency
                            locale="en"
                            quantity={GrandTotal}
                            symbol="K"
                          />
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography variant="h6">Balance due:</Typography>
                        <Typography variant="h6">
                          <Currency
                            locale="en"
                            quantity={BalanceDue}
                            symbol="K"
                          />
                        </Typography>
                      </div>
                    </div>

                    <div style={{ marginTop: 50 }}>
                      <Button
                        onClick={event => {
                          if (values.amount === "") {
                            setamountPaidErr(true);
                            return;
                          }
                          makePayment("mutiple");
                          handleClick2(event);
                        }}
                        style={{ height: 70, marginRight: 10 }}
                        variant="contained"
                        color="primary"
                        disabled={Paid}
                      >
                        <Typography variant="h5">Cash payment</Typography>
                      </Button>

                      {/*  */}
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleCloseAlert}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500
                        }}
                      >
                        <Fade in={open}>
                          <div className={classes.paper}>
                            <Typography variant="h6">{AlertMsg}</Typography>
                          </div>
                        </Fade>
                      </Modal>

                      {/* <Button
                        style={{ height: 70, marginRight: 10 }}
                        variant="contained"
                        color="primary"
                      >
                        <Typography variant="h5">Cheque payment</Typography>
                      </Button> */}
                      {/* <Button
                        style={{ height: 70 }}
                        variant="contained"
                        color="secondary"
                      >
                        <Typography variant="h5">Credit Card</Typography>
                      </Button> */}
                    </div>
                  </div>
                </div>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                // onClose={handleClose2}
              >
                <div
                  style={{
                    width: 250,
                    height: 100,
                    textAlign: "center",
                    justifyContent: "center"
                  }}
                >
                  <div style={{ marginTop: 40 }}>
                    <Typography variant="h6">Payment Successful</Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={event => {
                      handleClose2();
                      isPaid(false);
                    }}
                    style={{ width: 200 }}
                  >
                    Okay
                  </Button>
                </div>
              </Menu>
            </Drawer>
          </div>
        )}

        <div style={{ marginTop: 5, marginBottom: 5, display: "flex" }}>
          <Button
            onClick={RestCartList}
            variant="contained"
            className={classes.botton4}
          >
            <Typography>Close</Typography>
          </Button>
          <Button
            onClick={RestCartList}
            variant="contained"
            color="primary"
            disabled={props.TicketToPrint.active ? false : true}
            style={{ width: 145 }}
          >
            <Typography>Print</Typography>
          </Button>
        </div>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", marginBottom: 20 }}>
            <IconButton
              onClick={() => handleQchange("add")}
              aria-label="delete"
            >
              <AddIcon />
            </IconButton>
            <Typography variant="h5" style={{ marginTop: 5 }}>
              {qu}
            </Typography>
            <IconButton
              onClick={() => handleQchange("remove")}
              aria-label="delete"
            >
              <RemoveIcon />
            </IconButton>
          </div>

          <Button
            onClick={() => handleQchange("delete")}
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </Menu>
    </div>
  );
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

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
