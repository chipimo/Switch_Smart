import React = require("react");
import { connect } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
const Currency = require("react-currency-formatter");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 10 
  },
  gridList: {
    width: "100%",
    height: 350
  }
}));

const MutiList = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={110} className={classes.gridList} cols={3}>
        {props.multi.multi.map(prices => (
          <GridListTile key={prices} cols={1}>
            <Paper
              style={{
                height: 100,
                width: 160,
                cursor: "pointer",
                backgroundColor:
                  props.Theme.theme === "light" ? "#E0E1E3" : "#212121",
                margin: 7,
                textAlign: "center",
                justifyContent: "center",
                paddingTop: 30
              }}
            >
              <Typography variant="h5">
                <Currency locale="en" quantity={prices} symbol="K " />
              </Typography>
            </Paper>
          </GridListTile>
        ))}
      </GridList>
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
export default connect(mapStateToProps, mapDispatchToProps)(MutiList);
