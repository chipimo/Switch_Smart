"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    container: {
        maxHeight: 380
    },
    table: {
        width: "100%"
    }
}); });
var columns = [
    {
        id: "checkBox",
        label: "",
        minWidth: 30,
        align: "left",
        format: function (value) { return value.toLocaleString(); }
    },
    {
        id: "date",
        label: "Date",
        minWidth: 170,
        align: "left",
        format: function (value) { return value.toLocaleString(); }
    },
    {
        id: "description",
        label: "Description",
        minWidth: 170,
        align: "left",
        format: function (value) { return value.toLocaleString(); }
    },
    {
        id: "debit",
        label: "Debit",
        minWidth: 170,
        align: "right",
        format: function (value) { return value.toFixed(2); }
    },
    {
        id: "credit",
        label: "Credit",
        minWidth: 170,
        align: "right",
        format: function (value) { return value.toLocaleString(); }
    },
    {
        id: "balance",
        label: "Balance",
        minWidth: 170,
        align: "right",
        format: function (value) { return value.toLocaleString(); }
    }
];
function createData(id, date, description, debit, credit, balance) {
    return { id: id, date: date, description: description, debit: debit, credit: credit, balance: balance };
}
var rows = [
    createData("t1", "3/31/2020 1:02", "Sales Transations [#1]", "-", "K 200.00", "(98.90)"),
    createData("t2", "3/3/2020 1:02", "Sales Transations [#2]", "-", "K 200.00", "(98.90)")
];
var Inventory = function (props) {
    var classes = useStyles();
    var _a = React.useState(""), age = _a[0], setAge = _a[1];
    var _b = React.useState(0), page = _b[0], setPage = _b[1];
    var _c = React.useState(10), rowsPerPage = _c[0], setRowsPerPage = _c[1];
    var _d = React.useState(), selectedId = _d[0], setSelectedId = _d[1];
    var _e = React.useState(), selected = _e[0], setSelected = _e[1];
    var handleChangePage = function (event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function (event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (React.createElement("div", { style: { height: "59vh" } },
        React.createElement(core_1.Paper, null,
            React.createElement(core_1.TableContainer, { className: classes.container },
                React.createElement(core_1.Table, { stickyHeader: true, "aria-label": "sticky table" },
                    React.createElement(core_1.TableHead, null,
                        React.createElement(core_1.TableRow, null, columns.map(function (column) { return (React.createElement(core_1.TableCell, { key: column.id, align: column.align, style: { minWidth: column.minWidth } },
                            React.createElement(core_1.Typography, { variant: "h6" }, column.label))); }))),
                    React.createElement(core_1.TableBody, null, rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(function (row) {
                        return (React.createElement(core_1.TableRow, { hover: true, style: { cursor: "context-menu" }, onClick: function () {
                                //   setSelectedId(row.id);
                                //   setSelected(row);
                                //   console.log(row);
                            }, selected: selectedId === row.id, role: "checkbox", tabIndex: -1, key: row.id }, columns.map(function (column, index) {
                            var value = row[column.id];
                            var labelId = "enhanced-table-checkbox-" + index;
                            if (column.id === "checkBox") {
                                return (React.createElement(core_1.TableCell, { padding: "checkbox" },
                                    React.createElement(core_1.Checkbox, { checked: selectedId === row.id, inputProps: {
                                            "aria-labelledby": labelId
                                        } })));
                            }
                            else {
                                return (React.createElement(core_1.TableCell, { key: column.id, align: column.align },
                                    React.createElement(core_1.Typography, null, column.format && typeof value === "number"
                                        ? column.format(value)
                                        : value)));
                            }
                        })));
                    })))),
            React.createElement(core_1.TablePagination, { rowsPerPageOptions: [10, 25, 100], component: "div", count: rows.length, rowsPerPage: rowsPerPage, page: page, onChangePage: handleChangePage, onChangeRowsPerPage: handleChangeRowsPerPage }))));
};
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = {};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Inventory);
//# sourceMappingURL=Inventory.js.map