import React = require("react");
import { Paper, Typography, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AppBar from "@material-ui/core/AppBar";
import { Clock } from "grommet";
import { Button } from "@blueprintjs/core";
import { Route, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import SelectionPan from "./screens/SelectionPan";
import LoginPage from "./screens/LoginPage";
import WorkPeriod from "./screens/WorkPeriod";
import Pos from "./screens/Pos";
import Tickets from "./screens/Tickets";
import Accouts from "./screens/Accouts";
import AccountDetails from "./screens/Accouts/AccountDetails";
import Warehouses from "./screens/Warehouses";
import DepartmentView from "./screens/Departments/DepartmentView";
import Reports from "./screens/Reports";
import Settings from "./screens/Settings";
import NewWorkPeriod from "./screens/WorkPeriod/NewWorkPeriod";
import appDb from "./redux/dataBase";

const socketIOClient = require("socket.io-client");
const moment = require("moment");

const socketUrl = "http://localhost:3200";

// Moment valz
var date = new Date();
var check = moment(date);
var day = check.format("dddd"); // => ('Monday' , 'Tuesday' ----)
var month = check.format("MMMM"); // => ('January','February.....)
var year = check.format("YYYY");

// Theme layout
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

// Tool tip
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const Accapp = (props) => {
  const [conn, setConn] = React.useState({ Connected: false });
  const [iSConnecting, setiSConnecting] = React.useState(true);

  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      initiSocket();
    }, 3000);
  }, []);

  const initiSocket = () => {
    setConn({ ...conn, Connected: false });

    const socket = socketIOClient(socketUrl);
    socket.on("connect", () => {
      setConn({ ...conn, Connected: true });
      props.dispatchEvent({ type: "CONNECTED", socket: socket });
    });

    socket.on("disconnect", () => {
      props.dispatchEvent({ type: "CONNCETIONFAILED" });
    });

    setTimeout(() => {
      setiSConnecting(false);
    }, 300);
  };

  return (
    <ThemeProvider
      theme={props.Theme.theme === "light" ? lightTheme : darkTheme}
    >
      <Paper square style={{ width: "100%", height: "100vh" }}>
        {/* Top tool bar */}
        <AppBar elevation={1} position="static" color="default">
          <div
            style={{
              width: "100%",
              paddingLeft: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", marginTop: 10 }}>
              <div>
                <img
                  style={{ width: 30, marginTop: -2, marginRight: 10 }}
                  src={"./assets/icons/logo.png"}
                />
              </div>
              <div>
                <Typography
                  variant="h6"
                  style={{ color: "#AAAAAA", marginTop: -5 }}
                  color="inherit"
                >
                  Switch Smart
                </Typography>
              </div>
            </div>

            <div style={{ marginRight: 26, display: "flex" }}>
              <div style={{ display: "flex", color: "#888080" }}>
                <div style={{ marginTop: 5, marginRight: 10 }}>
                  <Typography variant="h6">{day},</Typography>
                </div>
                <div style={{ marginTop: 5, marginRight: 10 }}>
                  <Typography variant="h6">
                    {month} {date.getDate()},
                  </Typography>
                </div>
                <div style={{ marginTop: 5, marginRight: 10 }}>
                  <Typography variant="h6">{year}</Typography>
                </div>
                <div style={{ marginTop: 9, marginRight: 20 }}>
                  <Typography variant="h6">
                    <Clock style={{ color: "#888080" }} type="digital" />
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </AppBar>

        {/* Main View */}
        <Paper
          style={{
            width: "100%",
            height: "85vh",
          }}
        >
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={SelectionPan} />
          <Route path="/workperiod/list-file" component={WorkPeriod} />
          <Route path="/workperiod/new-file" component={NewWorkPeriod} />
          <Route path="/pos" component={Pos} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/accounts" component={Accouts} />
          <Route path="/accounts_details" component={AccountDetails} />
          <Route path="/warehouses" component={Warehouses} />
          <Route path="/departments" component={DepartmentView} />
          <Route path="/reports" component={Reports} />
          <Route path="/settings" component={Settings} />
        </Paper>
        {/* Footer */}
        <AppBar
          style={{
            borderStyle: "solid",
            height: 50,
            borderWidth: 1,
            borderColor: "transparent",
            borderTopColor:
              props.Theme.theme === "light" ? "#C6C6C6" : "transparent",
          }}
          position="static"
          color="default"
        >
          <div
            style={{
              marginTop: 10,
              marginRight: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginLeft: 20, display: "flex" }}>
              {iSConnecting ? (
                <div style={{ marginTop: 6, display: "flex" }}>
                  <Icon name="refresh" loading />
                  <Typography style={{ marginTop: -4 }}>
                    Connecting...
                  </Typography>
                </div>
              ) : (
                <div>
                  {props.SocketConn.isConn ? (
                    <div style={{ marginTop: 5, display: "flex" }}>
                      <Icon name="server" color="green" />
                      <Typography style={{ marginTop: -1 }}>
                        Connected*
                      </Typography>
                    </div>
                  ) : (
                    <div style={{ marginTop: 5, display: "flex" }}>
                      <Icon name="server" />
                      <Typography style={{ marginTop: -1 }}>
                        Connection Failed
                      </Typography>
                    </div>
                  )}
                </div>
              )}
              {props.Dep.dep ? (
                <div style={{ display: "flex", marginLeft: 10, marginTop: 5 }}>
                  <Icon name="building" />
                  <Typography>{props.Dep.dep}</Typography>
                </div>
              ) : null}
            </div>

            <div style={{ display: "flex" }}>
              {props.User.isLoggedIn ? (
                <div style={{ display: "flex" }}>
                  <div style={{ marginTop: 3, marginRight: 10 }}>
                    <Typography>{props.User.userLogged.userName}</Typography>
                  </div>
                  <div style={{ marginTop: -3, marginRight: 10 }}>
                    <IconButton
                      style={{ height: 40, width: 40, marginTop: -3 }}
                    >
                      <Icon style={{ marginTop: -5 }} name="users" />
                    </IconButton>
                  </div>
                  {/* Menu Button */}
                  <div style={{ marginRight: 10 }}>
                    <Button
                      onClick={() => {
                        history.push("/home");
                      }}
                    >
                      <Typography>Main Menu</Typography>
                    </Button>
                  </div>
                </div>
              ) : null}

              {/* To remove ONLY FOR DEVELOPMENT */}
              <Button
                onClick={() => {
                  history.push("/home");
                }}
              >
                <Typography>Main Menu</Typography>
              </Button>

              <div>
                <div style={{ display: "flex" }}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography color="inherit">
                          Change Theme Color
                        </Typography>
                        {`default theme:${props.Theme.theme}`}
                      </React.Fragment>
                    }
                  >
                    <IconButton
                      style={{
                        width: 30,
                        height: 30,
                        backgroundColor:
                          props.Theme.theme === "light" ? "#212121" : "#ccc",
                      }}
                      onClick={() => {
                        props.dispatchEvent({
                          type: "setTheme",
                          setTheme:
                            props.Theme.theme === "light" ? "dark" : "light",
                        });
                      }}
                    />
                  </HtmlTooltip>
                </div>
              </div>
            </div>
          </div>
        </AppBar>
      </Paper>
    </ThemeProvider>
  );
};

function mapStateToProps(state) {
  return {
    NetiveNotify: state.NetiveNotify,
    Theme: state.Theme,
    SocketConn: state.SocketConn,
    User: state.User,
    Dep: state.Dep,
    WorkPeriod: state.WorkPeriod,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchEvent: (data) => dispatch(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accapp);
