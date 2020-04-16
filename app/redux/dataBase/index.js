"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../reducers/config");
var store_1 = require("../store");
var departments_1 = require("../reducers/departments");
var User_1 = require("../reducers/Users/User");
var workPeriod_1 = require("../reducers/WorkPeriod/workPeriod");
var updater_1 = require("./updater");
var AppDb = /** @class */ (function () {
    function AppDb() {
    }
    // Handel department
    AppDb.prototype.CheckConfig = function () {
        config_1.ConfigFile({ type: "checkConfig", id: "mainApp" }, function (callback) {
            if (callback) {
                var data = { initalData: { dep: callback } };
                setTimeout(function () {
                    if (store_1.default.getState().SocketConn.isConn)
                        store_1.default
                            .getState()
                            .SocketConn.socket.emit("DEP_CONNECTED", data);
                    store_1.default.dispatch({
                        type: "SETDEP",
                        dep: data,
                    });
                    store_1.default.dispatch({
                        type: "SETCONFIG",
                        isSet: true,
                        config: callback,
                    });
                }, 3500);
            }
            else {
                store_1.default.dispatch({
                    type: "SETCONFIG",
                    isSet: false,
                    config: {},
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
                sendCallback(reciveCallback);
                config_1.ConfigFile({ type: "set", data: reciveCallback }, function (callback) {
                    sendCallback(callback);
                });
            });
        }
        else if (props.type === "get") {
            departments_1.GetDepartment(props.data, function (reciveCallback) { });
        }
    };
    // Handel Users
    AppDb.prototype.HandleLogIn = function (props, callback) {
        User_1.UserLogIn(props, function (reciveCallback) {
            if (reciveCallback) {
                if (reciveCallback.isLoggedIn) {
                    var userData = {
                        dep: store_1.default.getState().Dep,
                        config: reciveCallback.config,
                    };
                    if (store_1.default.getState().SocketConn.isConn)
                        store_1.default
                            .getState()
                            .SocketConn.socket.emit("USER_CONNECTED", userData);
                }
                callback(reciveCallback);
            }
        });
    };
    // Handel Users
    AppDb.prototype.HandleLogOut = function (props, callback) {
        User_1.UserLogIn(props, function (reciveCallback) {
            if (reciveCallback) {
                if (reciveCallback.isLoggedIn)
                    if (store_1.default.getState().SocketConn.isConn)
                        store_1.default
                            .getState()
                            .SocketConn.socket.emit("USER_DISCONNECTED", reciveCallback.config);
                callback(reciveCallback);
            }
        });
    };
    // Handel WorkPeriods
    AppDb.prototype.HandleWorkperiods = function (props, callback) {
        if (props._type === "start") {
            workPeriod_1.StartWorkPeriod(props, function (reciveCallback) {
                // console.log(reciveCallback);
                updater_1.default._UpdateWorkPeriod({ _type: "start", data: reciveCallback }, function (reciveCallback) { });
                callback(reciveCallback);
            });
        }
        else if (props._type === "end") {
            workPeriod_1.EndWorkPeriod(props, function (reciveCallback) {
                callback(reciveCallback);
            });
        }
        else if (props._type === "check") {
            workPeriod_1.CheckWorkPeriod(props, function (reciveCallback) {
                callback(reciveCallback);
            });
        }
        else if (props._type === "loadList") {
            workPeriod_1.WorkPeriodList(function (reciveCallback) {
                callback(reciveCallback);
            });
        }
    };
    /**
     * HandleDepConn
     */
    AppDb.prototype.HandleDepConn = function (props, sendCallback) { };
    return AppDb;
}());
var appDb = new AppDb();
exports.default = appDb;
//# sourceMappingURL=index.js.map