import React = require("react");
import { connect } from "react-redux";
import { Paper, Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useLocation, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const index = (props) => {
  const classes = useStyles();
  const [tab1, setTab1] = React.useState(false);
  const [tab2, setTab2] = React.useState(false);
  const [tab3, setTab3] = React.useState(false);
  const [tab4, setTab4] = React.useState(false);
  const [tab5, setTab5] = React.useState(false);
  const [tab6, setTab6] = React.useState(false);
  const [tab7, setTab7] = React.useState(false);
  const [tab8, setTab8] = React.useState(false);
  const [tab9, setTab9] = React.useState(false);

  const history = useHistory();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex" }}>
        <Paper
          square
          onClick={() => {
            history.push("/workperiod/list-file");
          }}
          onMouseEnter={() => {
            setTab1(true);
          }}
          onMouseLeave={() => {
            setTab1(false);
          }}
          elevation={tab1 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          <img
            src={"./assets/icons/timetable.png"}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 13 }} variant="h4">
            Work Periods
          </Typography>
        </Paper>
        <Paper
          square
          onClick={() => {
            props.WorkPeriod.isStarted ? history.push("/pos") : handleOpen();
          }}
          onMouseEnter={() => {
            setTab2(true);
          }}
          onMouseLeave={() => {
            setTab2(false);
          }}
          elevation={tab2 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
            marginLeft: 15,
          }}
        >
          <img
            src={
              props.WorkPeriod.isStarted
                ? "./assets/icons/icons8_cash_register_128px_1.png"
                : props.Theme.theme === "light"
                ? "./assets/icons/icons8_cash_register_128px_3.png"
                : "./assets/icons/icons8_cash_register_128px_4.png"
            }
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Typography
            style={{
              color: props.WorkPeriod.isStarted
                ? "#fff"
                : props.Theme.theme === "light"
                ? "#0082A4"
                : "#000",
              marginTop: 3,
            }}
            variant="h4"
          >
            POS
          </Typography>
        </Paper>
        <Paper
          square
          onClick={() => {
            history.push("/tickets");
          }}
          onMouseEnter={() => {
            setTab3(true);
          }}
          onMouseLeave={() => {
            setTab3(false);
          }}
          elevation={tab3 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
            marginLeft: 15,
          }}
        >
          <img
            src={"./assets/icons/invoice.png"}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 10 }} variant="h4">
            Tickets
          </Typography>
        </Paper>
      </div>

      <div style={{ display: "flex", marginTop: 10 }}>
        <Paper
          square
          onClick={() => {
            history.push("/accounts");
          }}
          onMouseEnter={() => {
            setTab4(true);
          }}
          onMouseLeave={() => {
            setTab4(false);
          }}
          elevation={tab4 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          <img
            src={"./assets/icons/combo_chart.png"}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 13 }} variant="h4">
            Accounts
          </Typography>
        </Paper>
        <Paper
          onClick={() => {
            history.push("/warehouses");
          }}
          square
          onMouseEnter={() => {
            setTab5(true);
          }}
          onMouseLeave={() => {
            setTab5(false);
          }}
          elevation={tab5 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
            marginLeft: 15,
          }}
        >
          <img
            src={"./assets/icons/icons8_warehouse_240px.png"}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 3 }} variant="h4">
            Warehouses
          </Typography>
        </Paper>
        <Paper
          square
          onClick={() => {
            history.push("/departments");
          }}
          onMouseEnter={() => {
            setTab6(true);
          }}
          onMouseLeave={() => {
            setTab6(false);
          }}
          elevation={tab6 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
            marginLeft: 15,
          }}
        >
          <img
            src={"./assets/icons/icons8_unit_240px.png"}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 10 }} variant="h4">
            Departments
          </Typography>
        </Paper>
      </div>

      <div style={{ display: "flex", marginTop: 10 }}>
        <Paper
          square
          onClick={() => {
            history.push("/reports");
          }}
          onMouseEnter={() => {
            setTab7(true);
          }}
          onMouseLeave={() => {
            setTab7(false);
          }}
          elevation={tab7 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          <img
            src={"./assets/icons/account.png"}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 13 }} variant="h4">
            Reports
          </Typography>
        </Paper>
        <Paper
          onClick={() => {
            history.push("/settings");
          }}
          square
          onMouseEnter={() => {
            setTab8(true);
          }}
          onMouseLeave={() => {
            setTab8(false);
          }}
          elevation={tab8 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
            marginLeft: 15,
          }}
        >
          <img
            src={"./assets/icons/icons8_settings_100px.png"}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 11 }} variant="h4">
            Settings
          </Typography>
        </Paper>
        <Paper
          square
          onClick={() => {
            props.dispatchEvent({
              type: "LOGOUT",
            });
            setTimeout(() => {
              history.push("/");
            }, 400);
          }}
          onMouseEnter={() => {
            setTab9(true);
          }}
          onMouseLeave={() => {
            setTab9(false);
          }}
          elevation={tab9 ? 20 : 2}
          style={{
            backgroundColor:
              props.Theme.theme === "light" ? "#00AEDB" : "#212121",
            width: 430,
            cursor: "pointer",
            height: 160,
            textAlign: "center",
            paddingTop: 20,
            marginLeft: 15,
          }}
        >
          <img
            src={"./assets/icons/icons8_export_52px.png"}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 10 }} variant="h4">
            Logout
          </Typography>
        </Paper>
      </div>
      {/* Work Period Modal */}
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          className={classes.modal}
          // onClose={handleClose}
        >
          <Paper style={{ padding: 20 }}>
            <div>
              <Typography variant="h6">Start work Period first</Typography>
            </div>
            <div style={{ marginTop: 20 }}>
              <Button
                onClick={handleClose}
                variant="contained"
                color="secondary"
                style={{ width: 200 }}
              >
                Ok
              </Button>
            </div>
          </Paper>
        </Modal>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    Theme: state.Theme,
    WorkPeriod: state.WorkPeriod,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchEvent: (data) => dispatch(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
