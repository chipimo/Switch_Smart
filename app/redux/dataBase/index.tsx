import { ConfigFile } from "../reducers/config";
import configureStore from "../store";
import {
  CheckDepartments,
  SetDepartments,
  GetDepartment,
} from "../reducers/departments";
import { UserLogIn } from "../reducers/Users/User";
import {
  StartWorkPeriod,
  EndWorkPeriod,
  CheckWorkPeriod,
  WorkPeriodList,
} from "../reducers/WorkPeriod/workPeriod";
import Backup from "./updater";

class AppDb {
  // Handel department
  public CheckConfig() {
    ConfigFile({ type: "checkConfig", id: "mainApp" }, (callback) => {
      if (callback) {
        var data = { initalData: { dep: callback } };

        setTimeout(() => {
          if (configureStore.getState().SocketConn.isConn)
            configureStore
              .getState()
              .SocketConn.socket.emit("DEP_CONNECTED", data);
          configureStore.dispatch({
            type: "SETDEP",
            dep: data,
          });
          configureStore.dispatch({
            type: "SETCONFIG",
            isSet: true,
            config: callback,
          });
        }, 3500);
      } else {
        configureStore.dispatch({
          type: "SETCONFIG",
          isSet: false,
          config: {},
        });
      }
    });
  }

  public HandleDepartments(props, sendCallback) {
    if (props.type === "check") {
      CheckDepartments("", (callback) => {
        sendCallback(callback);
      });
    } else if (props.type === "set") {
      SetDepartments(props.data, (reciveCallback) => {
        sendCallback(reciveCallback);
        ConfigFile({ type: "set", data: reciveCallback }, (callback) => {
          sendCallback(callback);
        });
      });
    } else if (props.type === "get") {
      GetDepartment(props.data, (reciveCallback) => {});
    }
  }
  // Handel Users
  public HandleLogIn(props, callback) {
    UserLogIn(props, (reciveCallback) => {
      if (reciveCallback) {
        if (reciveCallback.isLoggedIn) {
          var userData = {
            dep: configureStore.getState().Dep,
            config: reciveCallback.config,
          };
          if (configureStore.getState().SocketConn.isConn)
            configureStore
              .getState()
              .SocketConn.socket.emit("USER_CONNECTED", userData);
        }
        callback(reciveCallback);
      }
    });
  }
  // Handel Users
  public HandleLogOut(props, callback) {
    UserLogIn(props, (reciveCallback) => {
      if (reciveCallback) {
        if (reciveCallback.isLoggedIn)
          if (configureStore.getState().SocketConn.isConn)
            configureStore
              .getState()
              .SocketConn.socket.emit(
                "USER_DISCONNECTED",
                reciveCallback.config
              );
        callback(reciveCallback);
      }
    });
  }
  // Handel WorkPeriods
  public HandleWorkperiods(props, callback) {
    if (props._type === "start") {
      StartWorkPeriod(props, (reciveCallback) => {
        // console.log(reciveCallback);
        
        Backup._UpdateWorkPeriod(
          { _type: "start", data: reciveCallback },
          (reciveCallback) => {}
        );
        callback(reciveCallback);
      });
    } else if (props._type === "end") {
      EndWorkPeriod(props, (reciveCallback) => {
        callback(reciveCallback);
      });
    } else if (props._type === "check") {
      CheckWorkPeriod(props, (reciveCallback) => {
        callback(reciveCallback);
      });
    } else if (props._type === "loadList") {
      WorkPeriodList((reciveCallback) => {
        callback(reciveCallback);
      });
    }
  }
  /**
   * HandleDepConn
   */
  public HandleDepConn(props, sendCallback) {}
}

const appDb = new AppDb();
export default appDb;
