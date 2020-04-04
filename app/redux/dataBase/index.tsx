import { ConfigFile } from "../reducers/config";
import configureStore from "../store";
import { CheckDepartments, SetDepartments } from "../reducers/departments";

class AppDb {
  CheckConfig() {
    ConfigFile({ type: "checkConfig", id: "mainApp" }, callback => {
      if (callback) {
        configureStore.dispatch({
          type: "SETCONFIG",
          isSet: true,
          config: callback
        });
      } else {
        configureStore.dispatch({
          type: "SETCONFIG",
          isSet: false,
          config: {}
        });
      }
    });
  }

  HandleDepartments(props, sendCallback) {
    if (props.type === "check") {
      CheckDepartments("", callback => {
        sendCallback(callback);
      });
    } else if (props.type === "set") {
      SetDepartments(props.data, reciveCallback => {
        console.log(reciveCallback);
      });
    }
  }
}

const appDb = new AppDb();
export default appDb;
