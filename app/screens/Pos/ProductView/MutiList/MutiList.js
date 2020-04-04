"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var GridList_1 = require("@material-ui/core/GridList");
var GridListTile_1 = require("@material-ui/core/GridListTile");
var Currency = require("react-currency-formatter");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 10
    },
    gridList: {
        width: "100%",
        height: 350
    }
}); });
var MutiList = function (props) {
    var classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(GridList_1.default, { cellHeight: 110, className: classes.gridList, cols: 3 }, props.multi.multi.map(function (prices) { return (React.createElement(GridListTile_1.default, { key: prices, cols: 1 },
            React.createElement(core_1.Paper, { style: {
                    height: 100,
                    width: 160,
                    cursor: "pointer",
                    backgroundColor: props.Theme.theme === "light" ? "#E0E1E3" : "#212121",
                    margin: 7,
                    textAlign: "center",
                    justifyContent: "center",
                    paddingTop: 30
                } },
                React.createElement(core_1.Typography, { variant: "h5" },
                    React.createElement(Currency, { locale: "en", quantity: prices, symbol: "K " }))))); }))));
};
function mapStateToProps(state) {
    return {
        Theme: state.Theme
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        dispatchEvent: function (data) { return dispatch(data); }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MutiList);
//# sourceMappingURL=MutiList.js.map