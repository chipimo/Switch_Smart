const React = require("react");
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    width: 200,
  }
}));

export const index = () => {
  const classes = useStyles();
  return (
    <div>
      <div style={{ padding: 20, width: "100%", display: "flex" }}>
        <div style={{}}>
          <TextField
            id="date"
            fullWidth
            label="Date from "
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div style={{marginLeft:40}}>
          <TextField
            id="date"
            fullWidth
            label="Date to "
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
      </div>
      <div>

      </div>
      <div>
          
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
