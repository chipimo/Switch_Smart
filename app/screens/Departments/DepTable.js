"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var material_table_1 = require("material-table");
var DepTable = function (props) {
    var _a = React.useState({
        columns: [
            { title: "Name", field: "name" },
            { title: "Surname", field: "surname" },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {
                title: "Birth Place",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
            }
        ],
        data: [
            { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
            {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34
            }
        ]
    }), state = _a[0], setState = _a[1];
    return (React.createElement("div", { style: { height: "70vh", overflow: "auto" } },
        React.createElement(material_table_1.default, { title: "All Departments", columns: state.columns, data: state.data, editable: {
                onRowAdd: function (newData) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                            setState(function (prevState) {
                                var data = prevState.data.slice();
                                data.push(newData);
                                return __assign({}, prevState, { data: data });
                            });
                        }, 600);
                    });
                },
                onRowUpdate: function (newData, oldData) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                            if (oldData) {
                                setState(function (prevState) {
                                    var data = prevState.data.slice();
                                    data[data.indexOf(oldData)] = newData;
                                    return __assign({}, prevState, { data: data });
                                });
                            }
                        }, 600);
                    });
                },
                onRowDelete: function (oldData) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                            setState(function (prevState) {
                                var data = prevState.data.slice();
                                data.splice(data.indexOf(oldData), 1);
                                return __assign({}, prevState, { data: data });
                            });
                        }, 600);
                    });
                }
            } })));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DepTable);
//# sourceMappingURL=DepTable.js.map