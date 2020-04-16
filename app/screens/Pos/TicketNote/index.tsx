import React = require("react");
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function index() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <TextField
        id="outlined-multiline-static"
        label="Ticket note"
        multiline
        fullWidth
        variant="outlined"
      />
      <div style={{ display: "flex", marginTop: 30 }}>
        <Button variant="contained" color="secondary">
          Add Note
        </Button>
      </div>
    </div>
  );
}

export default index;
