"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../store");
exports.CheckDepartments = function (props, callback) {
    // const dep = db
    //   .get("department")
    //   .value();
    // callback(dep);
    store_1.default.getState().SocketConn.socket.emit("GETDEPARTMENTS");
    store_1.default.getState().SocketConn.socket.on("DEP_RESULT", function (result) {
        if (result.exist) {
            callback({ exist: true, deps: result.deps });
        }
        else {
            callback({ exist: false });
        }
    });
};
exports.SetDepartments = function (props, callback) {
    store_1.default.getState().SocketConn.socket.emit("SETDEPARTMENTS", props);
    store_1.default.getState().SocketConn.socket.on("DEP_RESULT", function (result) {
        if (result.set) {
            callback({ set: true, deps: result.deps });
        }
        else {
            callback({ set: false });
        }
    });
    // const dep = db.get("department").value();
    // callback(dep);
};
//# sourceMappingURL=index.js.map