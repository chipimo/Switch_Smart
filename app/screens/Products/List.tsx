import React = require("react");
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {
  Typography,
  Paper,
  IconButton,
  Divider,
  InputBase,
  Modal,
} from "@material-ui/core";
import SearchInput, { createFilter } from "react-search-input";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import NewProduct from "./NewProduct";

const useStyles = makeStyles((theme) => ({
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
}));

const ProductList = (props) => {
  const classes = useStyles();
  const [openNewProduct, setopenNewProduct] = React.useState(false);

  React.useEffect(() => {
    if (props.Model.toClose === "new_product") {
      props.dispatchEvent({ type: "HANDELCLEAR" });
      CloseOpenNewProduct();
    }
  });

  const handleOpenNewProduct = () => {
    setopenNewProduct(true);
  };

  const CloseOpenNewProduct = () => {
    setopenNewProduct(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        padding: 4,
        backgroundColor: props.Theme.theme === "light" ? "#F5F5F5" : "#212121",
      }}
    >
      <div
        style={{
          width: "75%",
          height: "80vh",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: props.Theme.theme === "light" ? "#929292" : "#CECECE",
          marginTop: 1,
        }}
      >
        <List className={classes.root} subheader={<li />}>
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader
                  style={{
                    padding: 10,
                    backgroundColor:
                      props.Theme.theme === "light" ? "#F5F5F5" : "#212121",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "transparent",
                    borderTopColor:
                      props.Theme.theme === "light" ? "#B9B9B9" : "#CECECE",
                    borderBottomColor:
                      props.Theme.theme === "light" ? "#B9B9B9" : "#CECECE",
                  }}
                >
                  <Typography variant="h6">{`I'm sticky ${sectionId}`}</Typography>
                </ListSubheader>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`Item ${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </div>
      <div
        style={{
          width: "25%",
          height: "80vh",
          marginTop: 1,
          padding: 6,
        }}
      >
        <div>
          <Paper component="form" className={classes.rootSearch}>
            <InputBase
              className={classes.input}
              placeholder="Search Products"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div>
          <div onClick={() => handleOpenNewProduct()} style={{ marginTop: 10 }}>
            <Typography
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "transparent",
                borderBottomColor: "#ccc",
                padding: 5,
                cursor: "pointer",
              }}
            >
              Add Product
            </Typography>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openNewProduct}
        className={classes.modal}
        // onClose={handleCloseMulti}
      >
        <NewProduct />
      </Modal>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme,
    Model: state.Model,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchEvent: (data) => dispatch(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
