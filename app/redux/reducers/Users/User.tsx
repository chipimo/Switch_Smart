import db from "../../dataBase/connection";
import { getDatafilePath } from "../../dataBase/store/path";

const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

var baseFolder = getDatafilePath + "/" + "dataFiles";

export const UserLogIn = (props, callback) => {
  var file = baseFolder + "/Users/config.json"; 
  const adapter = new FileAsync(file);
  low(adapter).then((tempdb) => {
    const config = tempdb.get("users").find({ pin: props.pin }).value();
    if (config) {
      callback({ isLoggedIn: true, config });
    } else {
      callback({ isLoggedIn: false });
    }
  });
};
