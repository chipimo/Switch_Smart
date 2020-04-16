"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("../../dataBase/store/path");
var moment = require("moment");
var fs = require("fs-extra");
var uuidv4 = require("uuid/v4");
var low = require("lowdb");
var FileAsync = require("lowdb/adapters/FileAsync");
var defaultPath = path_1.getDatafilePath;
var folderPath = defaultPath + "/dataFiles/WorkPeriod/";
var ConfigPath = defaultPath + "/dataFiles/WorkPeriod/config.json";
var ConfigAdapter = new FileAsync(ConfigPath);
var check = moment(new Date());
var day = check.format("dddd"); // => ('Monday' , 'Tuesday' ----)
var month = check.format("MMMM"); // => ('January','February.....)
var year = check.format("YYYY");
var time = check.format("LT");
var weekdays = check.get("w");
function CreateId() {
    return uuidv4();
}
exports.CheckWorkPeriod = function (props, callback) {
    low(ConfigAdapter).then(function (tempdb) {
        var isWriten = tempdb.get("openPeriod").value();
        if (isWriten) {
            var isActive = isWriten.initalData.id;
            if (isActive)
                callback({ isOpen: true, data: isWriten });
            else
                callback({ isOpen: false });
        }
        else {
            callback({ isOpen: false });
        }
    });
};
var weekOfMonth = function (date) {
    var weekInYearInedx = date.week();
    if (date.year() != date.weekYear()) {
        weekInYearInedx = date.clone().subtract(1, "week").week() + 1;
    }
    var weekIndex = weekInYearInedx - moment(date).startOf("month").week() + 1;
    return weekIndex;
};
var CreateFile = function (_counter, props, callback) {
    var fileName = "work_period_" + _counter;
    var week = "week_" + weekOfMonth(moment(new Date()));
    var subFolder = folderPath +
        year +
        "/" +
        month +
        "/" +
        week +
        "/" +
        day +
        "/" +
        fileName +
        "/config.json";
    if (fs.existsSync(subFolder)) {
    }
    else {
        fs.ensureFileSync(subFolder);
        var initalData_1 = {
            id: CreateId(),
            dateStarted: props.dateStarted,
            dateStartedString: props.dateStartedString,
            dateEnded: "",
            dateEndedString: "",
            time: props.time,
            timeEnded: "",
            fileName: fileName,
            date: props.date,
            note: props.note,
            ticketsId: [],
            user: props.userId,
            department: props.department,
            departmentInfo: props.departmentInfo,
            workedFor: "",
            count: _counter,
            year: year,
            month: month,
            week: week,
            day: day,
        };
        // Upate the config file for open work periods
        low(ConfigAdapter).then(function (tempdb) {
            var isWriten = tempdb.get("openPeriod").value();
            if (isWriten) {
                tempdb
                    .get("openPeriod")
                    .chain()
                    .assign({ initalData: initalData_1 })
                    .value();
                tempdb.write();
            }
            else {
                tempdb.defaults({ openPeriod: { initalData: initalData_1 } }).write();
            }
        });
        // write to sub folder
        var adapter = new FileAsync(subFolder);
        low(adapter).then(function (tempdb) {
            tempdb
                .defaults({ data: [initalData_1] })
                .write()
                .then(function () {
                callback({ isDone: true, fileName: fileName, initalData: initalData_1 });
            });
        });
    }
};
exports.StartWorkPeriod = function (props, callback) {
    low(ConfigAdapter).then(function (tempdb) {
        var isWriten = tempdb.get("workPeriodCount").value();
        if (isWriten) {
            tempdb
                .get("workPeriodCount")
                .chain()
                .assign({ count: isWriten.count + 1 })
                .value();
            tempdb.write().then(function () {
                CreateFile(isWriten.count, props, function (reciveCallback) {
                    callback(reciveCallback);
                });
            });
        }
        else {
            tempdb
                .defaults({ workPeriodCount: { count: 1 } })
                .write()
                .then(function () {
                CreateFile(1, props, function (reciveCallback) {
                    callback(reciveCallback);
                });
            });
        }
    });
};
exports.EndWorkPeriod = function (props, sendCallback) {
    var subFolder = folderPath +
        props.year +
        "/" +
        props.month +
        "/" +
        props.week +
        "/" +
        props.day +
        "/" +
        props.fileName +
        "/config.json";
    var adapter = new FileAsync(subFolder);
    low(adapter).then(function (tempdb) {
        tempdb
            .get("data")
            .chain()
            .find({ dateEnded: "" })
            .assign({ dateEnded: props.dateEnded })
            .value();
        tempdb
            .get("data")
            .chain()
            .find({ dateEndedString: "" })
            .assign({ dateEndedString: props.dateEndedString })
            .value();
        tempdb
            .get("data")
            .chain()
            .find({ timeEnded: "" })
            .assign({ timeEnded: props.timeEnded })
            .value();
        tempdb
            .get("data")
            .chain()
            .find({ workedFor: "" })
            .assign({ workedFor: props.workedFor })
            .value();
        tempdb.write().then(function (data) {
            // write history list
            var configData = tempdb.get("data").value();
            low(ConfigAdapter).then(function (tempdb) {
                var isWriten = tempdb.get("data").value();
                if (isWriten) {
                    tempdb.get("data").push(configData[0]).write();
                }
                else {
                    tempdb.defaults({ data: [configData[0]] }).write();
                }
                // if (isWriten) {
                //   tempdb.get(`data.${year}.${month}`).push(configData[0]).write();
                // } else {
                //   tempdb
                //     .defaults({ data: [{ [year]: [{ [month]: [configData[0]] }] }] })
                //     .write();
                // }
                tempdb.get("openPeriod").chain().assign({ initalData: {} }).value();
                tempdb.write().then(function () {
                    sendCallback({ isDone: true, data: configData[0] });
                });
            });
        });
        // sendCallback({ isDone: true });
    });
};
exports.WorkPeriodList = function (sendCallback) {
    var tempData = [];
    low(ConfigAdapter).then(function (tempdb) {
        var data = tempdb.get("data").value();
        var Started = tempdb.get("openPeriod.initalData").value();
        if (data)
            tempData = data;
        if (Started.id)
            tempData.push(Started);
        // console.log(tempData);
        sendCallback(tempData.reverse());
    });
};
//# sourceMappingURL=workPeriod.js.map