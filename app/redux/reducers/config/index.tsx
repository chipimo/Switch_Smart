import db from "../../dataBase/connection";

export const ConfigFile = (props, callback) => {
  const config = db
    .get("config")
    .find({ id: props.id })
    .value();
  callback(config);
};
