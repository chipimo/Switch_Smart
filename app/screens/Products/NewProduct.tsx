import React = require("react");
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
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
}));

const NewProduct = (props) => {
  const classes = useStyles();
  const [portionInputs, setPortionInputs] = React.useState({
    data: [],
  });
  const [portionValues, setPortionValues] = React.useState({});
  const [values, setValues] = React.useState({
    ProductName: "",
    BarCode: "",
    alertOut: "",
    amount: "",
    Groupname: "",
    subtree: "",
  });
  const [errors, setErrors] = React.useState({
    nameError: "",
    barCodeError: "",
    alertOutError: "",
    groupError: "",
    amount: "",
    subtreeError: "",
  });
  const [barcodes, setBarcodes] = React.useState({
    barcode: [],
  });

  const [PriceValues, setPriceValues] = React.useState({ data: [] });
  const [MultiplierValues, setMultiplierValues] = React.useState({ data: [] });
  const [BarcodeValues, setBarcodeValues] = React.useState({ data: [] });
  const [mainGroups, setMainGroups] = React.useState([]);

  const handleTextChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if (prop === "ProductName") setErrors({ ...errors, nameError: "" });
    if (prop === "alertOut") setErrors({ ...errors, alertOutError: "" });
    if (prop === "Groupname") setErrors({ ...errors, groupError: "" });
    if (prop === "subtree") setErrors({ ...errors, subtreeError: "" });
  };

  const handelOnTextPartonChage = (type, value, id) => {
    setPortionValues({
      ...portionValues,
      value: value,
      [type]: type,
      id: id,
    });
    console.log(portionValues);
    
  };

  const handelPortion = () => {
    var newArr = [];

    newArr = portionInputs.data;
    var barcord = `input_${newArr.length}`;
    var multiplierName = `multiplier_${newArr.length}`;
    var price = `price_${newArr.length}`;
    var id = 0;

    if (newArr.length === 0) {
      newArr.push({
        id: id,
        barcord: barcord,
        multiplier: multiplierName,
        price: price,
      });
    } else {
      id = newArr.length;
      newArr.push({
        id: id,
        barcord: barcord,
        multiplier: multiplierName,
        price: price,
      });
    }
    setPortionInputs({ ...portionInputs, data: newArr });
  };

  return (
    <div className={classes.paper} style={{ backgroundColor: "#F8F8F8" }}>
      <div style={{ height: 400 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="ProductName"
              name="ProductName"
              variant="outlined"
              required
              fullWidth
              value={values.ProductName}
              onChange={handleTextChange("ProductName")}
              id="ProductName"
              label="Product Name"
              autoFocus
              error={errors.nameError === "" ? false : true}
              helperText={errors.nameError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              id="combo-box-demo"
              options={mainGroups}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Group Code"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: 10 }} />
        <Grid item xs={12} sm={6}>
          <Autocomplete
            id="combo-box-demo"
            options={mainGroups}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Recipes"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <div style={{ marginTop: 30 }}>
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                borderColor: "#aaaaaa",
                borderStyle: "solid",
                height: 230,
                borderWidth: 1,
                borderRadius: 3,
                marginTop: 20,
              }}
            >
              <div
                style={{
                  marginTop: -10,
                  backgroundColor: "#F8F8F8",
                  marginLeft: 10,
                  width: 97,
                  paddingLeft: 5,
                }}
              >
                <Typography variant="body2">Portion Prices</Typography>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    padding: 10,
                    width: "82%",
                    maxHeight: 210,
                    overflow: "hidden",
                    overflowY: "auto",
                  }}
                >
                  <table className={classes.table}>
                    <thead>
                      <tr>
                        <th className={classes.tableCol}>BarCode</th>
                        <th className={classes.tableCol}>Multiplier</th>
                        <th className={classes.tableCol}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portionInputs.data.map((tablelist) => (
                        <tr
                          key={tablelist.id}
                          // onClick={() => console.log(tablelist)}
                        >
                          <td className={classes.tableRow}>
                            <input
                              style={{
                                border: "none",
                                outline: "none",
                                width: 120,
                                backgroundColor: "transparent",
                              }}
                              onInput={(e) => {
                                handelOnTextPartonChage(
                                  tablelist.barcord,
                                  e.target.value,
                                  "barcode"
                                );
                              }}
                              type="text"
                              name={tablelist.barcode}
                            />
                          </td>
                          <td className={classes.tableRow}>
                            <input
                              style={{
                                border: "none",
                                width: 120,
                                outline: "none",
                                backgroundColor: "transparent",
                              }}
                              onInput={(e) => {
                                handelOnTextPartonChage(
                                  tablelist.multiplier,
                                  e.target.value,
                                  "multiplier"
                                );
                              }}
                              type="text"
                              name={tablelist.multiplier}
                            />
                          </td>
                          <td className={classes.tableRow}>
                            <input
                              style={{
                                border: "none",
                                width: 120,
                                outline: "none",
                                backgroundColor: "transparent",
                              }}
                              onInput={(e) => {
                                handelOnTextPartonChage(
                                  tablelist.price,
                                  e.target.value,
                                  "price"
                                );
                              }}
                              type="text"
                              name={tablelist.price}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ width: "15%" }}>
                  <div>
                    <a className={classes.link} onClick={() => handelPortion()}>
                      Add Portion
                    </a>
                  </div>
                  <div>
                    <a className={classes.link}>Delete Portion</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
        }}
      >
        <div>
          <Button
            style={{ marginLeft: 10 }}
            variant="contained"
            color="primary"
            onClick={() => {
              props.dispatchEvent({
                type: "HANDELCLOSE",
                toClose: "new_product",
              });
            }}
          >
            Save
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              props.dispatchEvent({
                type: "HANDELCLOSE",
                toClose: "new_product",
              });
            }}
            style={{ marginLeft: 10 }}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Cart: state.Cart,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchEvent: (data) => dispatch(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
