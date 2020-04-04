import React = require("react");
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";

export const index = props => {
  return (
    <div>
      <Button
        style={{
          width: "100%",
          backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121"
        }}
        variant="outlined"
      >
        <Typography>Select Customer</Typography>
      </Button>
      <Button
        style={{
          width: "100%",
          backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
          marginTop: 10
        }}
        variant="outlined"
      >
        <Typography>Ticket Note</Typography>
      </Button>
      <Button
        style={{
          width: "100%",
          backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
          marginTop: 10
        }}
        variant="outlined"
      >
        <Typography>Qutotation Ticket</Typography>
      </Button>
      <Button
        style={{
          width: "100%",
          backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
          marginTop: 10
        }}
        variant="outlined"
      >
        <Typography>Repare Ticket</Typography>
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme,
    SocketConn: state.SocketConn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
