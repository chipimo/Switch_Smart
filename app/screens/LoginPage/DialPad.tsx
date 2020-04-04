import React = require("react");
import { connect } from "react-redux";
import { Button, TextField, Typography } from "@material-ui/core";

const DialPad = props => {
  return (
    <div style={{ width: "70%", marginTop: 25 }}>
      <div>
        <TextField
          disabled={props.Config.isSet ? false : true}
          style={{ borderRadius: 0 }}
          fullWidth
          id="filled-password-input"
          label="ENTER PIN"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          color={props.Theme.theme === "light" ? "primary" : "secondary"}
          autoFocus
        />
      </div>
      {/* row 1 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6
        }}
      >
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">1</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">2</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">3</Typography>
        </Button>
      </div>
      {/* row 2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6
        }}
      >
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">4</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">5</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">6</Typography>
        </Button>
      </div>
      {/* row 3 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6
        }}
      >
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">7</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">8</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">9</Typography>
        </Button>
      </div>
      {/* row 4 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6
        }}
      >
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">X</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">0</Typography>
        </Button>
        <Button
          disabled={props.Config.isSet ? false : true}
          style={{
            width: 98,
            backgroundColor: props.Theme.theme === "light" ? "#fff" : "#212121",
            height: 70,
            borderRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="h5">></Typography>
        </Button>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: 10,
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <div>
          <Typography>Admin PIN 1234</Typography>
          <Typography>Change PIN will hide this hint</Typography>
        </div>
        <div style={{ marginTop: 6 }}>
          <Button
            disabled={props.Config.isSet ? false : true}
            style={{
              width: 98,
              backgroundColor:
                props.Theme.theme === "light" ? "#fff" : "#212121",
              height: 70,
              borderRadius: 0
            }}
            variant="outlined"
          >
            <Typography variant="h5">@</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme,
    Config: state.Config
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialPad);
