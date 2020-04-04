import React = require("react");
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: 2
  },
  list_light: {
    width: "100%",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#E3E3E3"
    }
  },
  list_dark: {
    width: "100%",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#6B6B6B"
    }
  }
});

export const index = props => {
  const classes = useStyles();
  const [active, setActive] = React.useState(0);

  const handleSelected = id => {
    setActive(id);
  };

  return (
    <div
      style={{
        borderColor: props.Theme.theme === "light" ? "#ccc" : "#535353",
        borderWidth: 1,
        borderStyle: "solid",
        width: "98%",
        height: "84vh",
        marginLeft: 10,
        display: "flex",
        padding: 10,
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          width: "76%",
          borderColor: props.Theme.theme === "light" ? "#ccc" : "#535353",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      >
        <div>
          <ul className={classes.root}>
            <div
              className={
                props.Theme.theme === "light"
                  ? classes.list_light
                  : classes.list_dark
              }
            >
              <li
                onClick={() => handleSelected(1)}
                style={{
                  padding: 6,
                  backgroundColor:
                    active === 1
                      ? props.Theme.theme === "light"
                        ? "#F78A09"
                        : "#212121"
                      : "transparent",
                  color: active === 1 ? "#fff" : "#1D1D1D"
                }}
              >
                <Typography
                  style={{
                    color:
                      props.Theme.theme === "light"
                        ? active === 1
                          ? "#fff"
                          : "#1D1D1D"
                        : "#fff"
                  }}
                >
                  Tuesday, March 31, 2020 8:06 AM
                </Typography>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div style={{ width: "23%" }}>
        <div></div>
        <div style={{ width: "100%" }}>
          <div style={{ marginTop: 20 }}>
            <Typography style={{ fontSize: 16 }}>
              Date of work Period: 3/28/2020
            </Typography>
            <Typography style={{ fontSize: 16 }}>
              Time of work Period: 1:04 AM
            </Typography>
            <Typography style={{ fontSize: 16 }}>Total work Time:</Typography>
            <Typography style={{ fontSize: 16 }}>
              3 days 6 hours 23 minutes
            </Typography>
          </div>
          <div style={{ marginTop: 20 }} />
          <Button
            style={{ width: "100%" }}
            variant="contained"
            color="primary"
            disableElevation
          >
            Start Work Period
          </Button>
          <div style={{ height: 10 }} />
          <Button
            style={{ width: "100%" }}
            variant="contained"
            color="primary"
            disableElevation
          >
            End Work Period
          </Button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
