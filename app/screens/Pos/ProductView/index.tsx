import React = require("react");
import { connect } from "react-redux";
import ButtonView from "./ButtonView";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import {
  AppBar,
  IconButton,
  Divider,
  Paper,
  Modal,
  Button
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import ButtonBase from "@material-ui/core/ButtonBase";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import MutiList from "./MutiList/MutiList";

const NumberFormat = require("react-number-format");
// const PropTypes = require("prop-types");

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

function innerProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "85vh"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
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
  image: {
    position: "relative",
    height: 200,
    margin: 10,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
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
    }
  },
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
}));

const tabsList = [
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

let ItemsInCart = [];

export const index = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [innerValue, setInnerValue] = React.useState(0);
  const [multi, setMulti] = React.useState([]);
  const [openMulti, setOpenMulti] = React.useState(false);

  const handleOpenMulti = () => {
    setOpenMulti(true);
  };

  const handleCloseMulti = () => {
    setOpenMulti(false);
  };

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInnerChange = (event, newValue) => {
    setInnerValue(newValue);
  };

  const handleChangeIndex = index => {
    setInnerValue(index);
  };

  const handleSelect = data => {
    if (data.multi.length === 0) {
      props.dispatchEvent({
        type: "ADDTOCART",
        payload: {
          items: data
        }
      });
    } else {
      setMulti(data);
      handleOpenMulti();
    }
  };

  return (
    <div style={{ width: "100%", height: "77vh", display: "flex" }}>
      <div style={{}}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {tabsList.map(itmes => (
              <Button
                key={itmes.index}
                className={classes.tab}
                onClick={() => {
                  handleChange("", itmes.index);
                }}
                style={{
                  // width: 150,
                  backgroundColor: itmes.background,
                  color: itmes.color
                }}
              >
                <Typography style={{ width: "100%" }}>
                  {itmes.tabname}
                </Typography>
              </Button>
            ))}
          </Tabs>
          <div style={{ width: 460, minWidth: 460 }}>
            {tabsList.map(data => (
              <TabPanel value={value} key={data.index} index={data.index}>
                <AppBar position="static" color="primary">
                  <ThemeProvider theme={darkTheme}>
                    <Tabs
                      value={innerValue}
                      indicatorColor="secondary"
                      textColor="red"
                      variant="scrollable"
                      scrollButtons="auto"
                      onChange={handleInnerChange}
                      aria-label="full width tabs example"
                    >
                      {data.category.map(items => (
                        <Tab
                          key={items.categoryKey}
                          label={items.cartname}
                          {...innerProps(items.categoryKey)}
                        />
                      ))}
                    </Tabs>
                  </ThemeProvider>
                </AppBar>
                {/* <Paper component="form" className={classes.rootSearch}>
              <SearchInput
                className={classes.searchBar}
                style={{ width: 400 }}
                // onChange={searchUpdated}
              />
            </Paper> */}
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={innerValue}
                  onChangeIndex={handleChangeIndex}
                >
                  {data.category.map(innerItem => (
                    <div style={{ marginLeft: 20, height: "75vh" }}>
                      {innerItem.subcart.map(products => (
                        <ButtonBase
                          focusRipple
                          key={products.productKey}
                          className={classes.image}
                          onClick={() => handleSelect(products)}
                          focusVisibleClassName={classes.focusVisible}
                          style={{
                            width: "45%"
                          }}
                        >
                          <span className={classes.imageSrc} />
                          <span className={classes.imageBackdrop} />
                          <span className={classes.imageButton}>
                            <Typography
                              component="span"
                              variant="h6"
                              color="inherit"
                              className={classes.imageTitle}
                            >
                              {products.ItemName}
                              <span className={classes.imageMarked} />
                              <div>
                                <NumberFormat
                                  value={products.initalPrice}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"K"}
                                />
                              </div>
                            </Typography>
                          </span>
                        </ButtonBase>
                      ))}
                    </div>
                  ))}
                </SwipeableViews>
              </TabPanel>
            ))}
          </div>
          <div>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={openMulti}
              className={classes.modal}
              // onClose={handleCloseMulti}
            >
              <Paper style={{ height: "55vh", width: "50%" }}>
                <div
                  style={{
                    marginTop: 10,
                    marginRight: 10,
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ marginLeft: 10 }}>
                    <Typography variant="h5" style={{ color: "#aaaaaa" }}>
                      Select Price
                    </Typography>
                  </div>
                  <IconButton onClick={handleCloseMulti}>
                    <ClearIcon />
                  </IconButton>
                </div>
                <div style={{ width: "100%" }}>
                  <MutiList multi={multi} />
                </div>
              </Paper>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme,
    SocketConn: state.SocketConn,
    Cart: state.Cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
