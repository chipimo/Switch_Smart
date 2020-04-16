import db from "../../dataBase/connection";
import configureStore from "../../store";

export const CheckDepartments = (props, callback) => {
  configureStore.getState().SocketConn.socket.emit("GETDEPARTMENTS");
  configureStore.getState().SocketConn.socket.on("DEP_RESULT", (result) => {
    if (result.exist) {
      callback({ exist: true, deps: result.deps });
    } else {
      callback({ exist: false });
    }
  });
};

export const SetDepartments = (props, callback) => {
  configureStore.getState().SocketConn.socket.emit("SETDEPARTMENTS", props);
  configureStore.getState().SocketConn.socket.on("DEP_RESULT", (result) => {
    if (result.set) {
      callback({ set: true, result });
    } else {
      callback({ set: false });
    }
  });
  // const dep = db.get("department").value();
  // callback(dep);
};

export const GetDepartment = (props, callback) => {
  configureStore
    .getState()
    .SocketConn.socket.emit("GETDEPARTMENTCOFIG", props.DepSelected.data);
};
