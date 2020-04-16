"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../store");
var Updater = /** @class */ (function () {
    function Updater() {
    }
    Updater.prototype._is_Conn = function () {
        var conn = store_1.default.getState().SocketConn.isConn;
        return { conn: conn, socket: store_1.default.getState().SocketConn.socket };
    };
    Updater.prototype._setToUpdate = function (props, sendCallback) { };
    Updater.prototype._UpdateWorkPeriod = function (props, sendCallback) {
        if (this._is_Conn().conn) {
            this._is_Conn().socket.emit("HANDEL_WORKPERIODS", props);
        }
        else {
        }
    };
    return Updater;
}());
var Backup = new Updater();
exports.default = Backup;
//# sourceMappingURL=updater.js.map