"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("../../dataBase/store/path");
var low = require("lowdb");
var FileAsync = require("lowdb/adapters/FileAsync");
var baseFolder = path_1.getDatafilePath + "/" + "dataFiles";
exports.UserLogIn = function (props, callback) {
    var file = baseFolder + "/Users/config.json";
    var adapter = new FileAsync(file);
    low(adapter).then(function (tempdb) {
        var config = tempdb.get("users").find({ pin: props.pin }).value();
        if (config) {
            callback({ isLoggedIn: true, config: config });
        }
        else {
            callback({ isLoggedIn: false });
        }
    });
};
//# sourceMappingURL=User.js.map