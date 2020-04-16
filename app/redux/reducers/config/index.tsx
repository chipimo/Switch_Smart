import db from "../../dataBase/connection";
import { getDatafilePath } from "../../dataBase/store/path";

const uuidv4 = require("uuid/v4");

let defaultPath = getDatafilePath;
const fs = require("fs-extra");

const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

function CreateId() {
  return uuidv4();
}

export const ConfigFile = (props, callback) => {
  if (props.type === "checkConfig") {
    const config = db.get("dep").value();
    callback(config);
  } else if (props.type === "set") {
    var userConfigFile = "";

    var initalData = {
      dep: {
        config: props.data.result.config,
        created: props.data.result.deps.created,
        id: "mainApp",
      },
    };

    props.data.result.files.forEach((element) => {
      var filePath = `${defaultPath}/dataFiles/${element}/config.json`;
      if (element === "Users") userConfigFile = filePath;
      fs.ensureFileSync(filePath);
    });

    const adapter = new FileAsync(userConfigFile);
    low(adapter).then((tempdb) => {
      tempdb
        .defaults({
          users: [props.data.result.admin],
        })
        .write();
    });
    const config = db.defaults(initalData).write();
    callback({
      isSet: true,
      initalData,
    });
  }

  const createDefultUser = (path) => {};
};
