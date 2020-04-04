"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("../../dataBase/connection");
exports.ConfigFile = function (props, callback) {
    var config = connection_1.default
        .get("config")
        .find({ id: props.id })
        .value();
    callback(config);
};
//# sourceMappingURL=index.js.map