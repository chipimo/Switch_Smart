"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("../../dataBase/connection");
var path_1 = require("../../dataBase/store/path");
var uuidv4 = require("uuid/v4");
var defaultPath = path_1.getDatafilePath;
var fs = require("fs-extra");
var low = require("lowdb");
var FileAsync = require("lowdb/adapters/FileAsync");
function CreateId() {
    return uuidv4();
}
exports.ConfigFile = function (props, callback) {
    if (props.type === "checkConfig") {
        var config = connection_1.default.get("dep").value();
        callback(config);
    }
    else if (props.type === "set") {
        var userConfigFile = "";
        var initalData = {
            dep: {
                config: props.data.result.config,
                created: props.data.result.deps.created,
                id: "mainApp",
            },
        };
        props.data.result.files.forEach(function (element) {
            var filePath = defaultPath + "/dataFiles/" + element + "/config.json";
            if (element === "Users")
                userConfigFile = filePath;
            fs.ensureFileSync(filePath);
        });
        var adapter = new FileAsync(userConfigFile);
        low(adapter).then(function (tempdb) {
            tempdb
                .defaults({
                users: [props.data.result.admin],
            })
                .write();
        });
        var config = connection_1.default.defaults(initalData).write();
        callback({
            isSet: true,
            initalData: initalData,
        });
    }
    var createDefultUser = function (path) { };
};
//# sourceMappingURL=index.js.map