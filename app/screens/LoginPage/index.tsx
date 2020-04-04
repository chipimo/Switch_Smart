import React = require("react");
import { connect } from "react-redux";
import { Paper, Typography, Divider, Button } from "@material-ui/core";
import DialPad from "./DialPad";
import appDb from "../../redux/dataBase";
import Lottie from "react-lottie";
import { Message, Loader } from "semantic-ui-react";
import * as animationData from "../../assets/lottie/505-error.json";
import Departments from "../Departments";

const index = props => {
  React.useEffect(() => {
    setTimeout(() => {
      appDb.CheckConfig();
    }, 200);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Paper
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor:
          props.Theme.theme === "light" ? "#E5E5E5" : "transparent"
      }}
    >
      <div
        style={{
          width: "60%",
          textAlign: "center",
          justifyContent: "center",
          marginTop: 190
        }}
      >
        {props.Config.isSet ? (
          <div>
            <Typography variant="h3">Switch Smart POS</Typography>
            <Typography variant="caption" style={{ fontSize: 16 }}>
              Switch to a smart world
            </Typography>
            <div
              style={{
                width: "30%",
                margin: "auto",
                marginBottom: 20,
                marginTop: 5
              }}
            >
              <Divider />
            </div>
            <Typography variant="caption" style={{ fontSize: 12 }}>
              Powered by Software Gaints.
            </Typography>
            <div />
            <Typography variant="caption" style={{ fontSize: 12 }}>
              {" "}
              {"Copyright © "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </div>
        ) : (
          <div style={{ marginTop: -120 }}>
            {!props.SocketConn.isConn ? (
              <div>
                <Lottie options={defaultOptions} height={200} width={200} />
                <div style={{ width: "50%", margin: "auto" }}>
                  <Message negative={props.SocketConn.isConn ? false : true}>
                    <Message.Header>
                      We're sorry we can't procced now !!!
                    </Message.Header>

                    <Typography>
                      Server connection faild, this may be casused by internet
                      connetion loss, make sure you have internet connection and
                      try again
                    </Typography>
                  </Message>

                  <Button variant="outlined">Retry again</Button>
                </div>
              </div>
            ) : (
              <div>
                <Departments />
              </div>
            )}
          </div>
        )}
      </div>
      <div style={{ width: "40%" }}>
        <DialPad />
      </div>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme,
    SocketConn: state.SocketConn,
    Config: state.Config
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
