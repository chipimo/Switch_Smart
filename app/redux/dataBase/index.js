"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../reducers/config");
var store_1 = require("../store");
var departments_1 = require("../reducers/departments");
var AppDb = /** @class */ (function () {
    function AppDb() {
    }
    AppDb.prototype.CheckConfig = function () {
        config_1.ConfigFile({ type: "checkConfig", id: "mainApp" }, function (callback) {
            if (callback) {
                store_1.default.dispatch({
                    type: "SETCONFIG",
                    isSet: true,
                    config: callback
                });
            }
            else {
                store_1.default.dispatch({
                    type: "SETCONFIG",
                    isSet: false,
                    config: {}
                });
            }
        });
    };
    AppDb.prototype.HandleDepartments = function (props, sendCallback) {
        if (props.type === "check") {
            departments_1.CheckDepartments("", function (callback) {
                sendCallback(callback);
            });
        }
        else if (props.type === "set") {
            departments_1.SetDepartments(props.data, function (reciveCallback) {
                console.log(reciveCallback);
            });
        }
    };
    return AppDb;
}());
var appDb = new AppDb();
exports.default = appDb;
//# sourceMappingURL=index.js.map