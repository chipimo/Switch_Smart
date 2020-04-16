import { getDatafilePath } from "../../dataBase/store/path";
const moment = require("moment");

const fs = require("fs-extra");
const uuidv4 = require("uuid/v4");
const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

let defaultPath = getDatafilePath;
const folderPath = defaultPath + "/dataFiles/WorkPeriod/";
const ConfigPath = defaultPath + "/dataFiles/WorkPeriod/config.json";
const ConfigAdapter = new FileAsync(ConfigPath);

var check = moment(new Date());
var day = check.format("dddd"); // => ('Monday' , 'Tuesday' ----)
var month = check.format("MMMM"); // => ('January','February.....)
var year = check.format("YYYY");
var time = check.format("LT");

var weekdays = check.get("w");

function CreateId() {
  return uuidv4();
}

export const CheckWorkPeriod = (props, callback) => {
  low(ConfigAdapter).then((tempdb) => {
    const isWriten = tempdb.get("openPeriod").value();
    if (isWriten) {
      var isActive = isWriten.initalData.id;
      if (isActive) callback({ isOpen: true, data: isWriten });
      else callback({ isOpen: false });
    } else {
      callback({ isOpen: false });
    }
  });
};

const weekOfMonth = (date) => {
  let weekInYearInedx = date.week();
  if (date.year() != date.weekYear()) {
    weekInYearInedx = date.clone().subtract(1, "week").week() + 1;
  }
  const weekIndex = weekInYearInedx - moment(date).startOf("month").week() + 1;
  return weekIndex;
};

const CreateFile = (_counter, props, callback) => {
  var fileName = "work_period_" + _counter;
  var week = `week_` + weekOfMonth(moment(new Date()));

  var subFolder =
    folderPath +
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
  } else {
    fs.ensureFileSync(subFolder);

    const initalData = {
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
      year,
      month,
      week,
      day,
    };
    // Upate the config file for open work periods
    low(ConfigAdapter).then((tempdb) => {
      const isWriten = tempdb.get("openPeriod").value();
      if (isWriten) {
        tempdb
          .get("openPeriod")
          .chain()
          .assign({ initalData: initalData })
          .value();
        tempdb.write();
      } else {
        tempdb.defaults({ openPeriod: { initalData } }).write();
      }
    });
    // write to sub folder
    const adapter = new FileAsync(subFolder);
    low(adapter).then((tempdb) => {
      tempdb
        .defaults({ data: [initalData] })
        .write()
        .then(() => {
          callback({ isDone: true, fileName, initalData });
        });
    });
  }
};

export const StartWorkPeriod = (props, callback) => {
  low(ConfigAdapter).then((tempdb) => {
    const isWriten = tempdb.get("workPeriodCount").value();
    if (isWriten) {
      tempdb
        .get("workPeriodCount")
        .chain()
        .assign({ count: isWriten.count + 1 })
        .value();

      tempdb.write().then(() => {
        CreateFile(isWriten.count, props, (reciveCallback) => {
          callback(reciveCallback);
        });
      });
    } else {
      tempdb
        .defaults({ workPeriodCount: { count: 1 } })
        .write()
        .then(() => {
          CreateFile(1, props, (reciveCallback) => {
            callback(reciveCallback);
          });
        });
    }
  });
};

export const EndWorkPeriod = (props, sendCallback) => {
  var subFolder =
    folderPath +
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

  const adapter = new FileAsync(subFolder);
  low(adapter).then((tempdb) => {
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
    tempdb.write().then((data) => {
      // write history list
      var configData = tempdb.get("data").value();

      low(ConfigAdapter).then((tempdb) => {
        const isWriten = tempdb.get("data").value();

        if (isWriten) {
          tempdb.get("data").push(configData[0]).write();
        } else {
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
        tempdb.write().then(() => {
          sendCallback({ isDone: true, data: configData[0] });
        });
      });
    });
    // sendCallback({ isDone: true });
  });
};

export const WorkPeriodList = (sendCallback) => {
  var tempData = [];

  low(ConfigAdapter).then((tempdb) => { 
    const data = tempdb.get("data").value();
    const Started = tempdb.get("openPeriod.initalData").value();

    if (data) tempData = data;
    if (Started.id) tempData.push(Started);

    // console.log(tempData);
    sendCallback(tempData.reverse());
  });
};
