const electron = require("electron");

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const { webContents, ipcMain } = require("electron");

const formatCurrency = require("format-currency");
const moment = require("moment");
const escpos = require("escpos");

let mainWindow;
const { dialog } = require("electron");

let app_files = "/app/index.html";
let win;
let mainRender;

// Printer

escpos.USB = require("escpos-usb");

function example(data) {
  const device = new escpos.USB();

  const options = { encoding: "GB18030" /* default */ };
  const printer = new escpos.Printer(device, options);

  const tux = path.join(__dirname, "assets/invoice_logo.png");

  var check = moment(new Date());

  var time = check.format("LT");
  let opts = { format: "%s%v %c", code: "ZMK", symbol: "K" };

  escpos.Image.load(tux, function (image) {
    device.open(function (error) {
      printer.align("ct").image(image, "s8");

      printer
        .font("a")
        .align("ct")
        .style("bu")
        .size(1, 1)
        .text(`Cash Sale Receipt No:${data.invoiceNumber}`)
        .text("Shop No C3,")
        .text("Arcades Shopping Mall")
        .text("Great East Road, Lusaka")
        .text(" ")
        .size(1, 2)
        .text("Tel: +260 975 30 30 30")
        .text(" ")
        .size(1, 1)
        .tableCustom([
          { text: "JR Liberty LTD", align: "LEFT", width: 0.4 },
          { text: " ", align: "CENTER", width: 0.19 },
          { text: "TPIN: 1003938315", align: "RIGHT", width: 0.44 },
        ])
        .tableCustom([
          {
            text: `Date: ${moment().format("DD-MMM-YYYY")}`,
            align: "LEFT",
            width: 0.44,
          },
          { text: " ", align: "CENTER", width: 0.2 },
          { text: `Time: ${time}`, align: "RIGHT", width: 0.4 },

          // { text: "Time: 07:16", align: "RIGHT", width: 1 },
          // { text: "Date: 04-Feb-20", align: "LEFT", width: 1 },
          // { text: "Casher : Melvin", align: "LEFT", width: 1 }
        ])
        .tableCustom([
          { text: `Casher : ${data.user}`, align: "LEFT", width: 1 },
        ])
        .text(" ")
        .text("---------------------------------------------");

      data.items.forEach((element) => {
        printer.tableCustom([
          {
            text: `${element.ItemName} * ${element.Qty}`,
            align: "LEFT",
            width: 0.49,
          },
          { text: " ", align: "CENTER", width: 0.16 },
          {
            text: formatCurrency(element.Price, opts),
            align: "RIGHT",
            width: 0.35,
          },
        ]);
      });

      if (data.isTaxInvoice) {
        printer.text("=============================================");
        printer
          .tableCustom([
            { text: " ", align: "LEFT", width: 0.49 },
            { text: " ", align: "CENTER", width: 0.55 },
            {
              text: `%${data.taxRate} Tax Amount: ${data.taxRate / 100}`,
              align: "RIGHT",
              width: 1,
            },
          ])
          .tableCustom([
            { text: " ", align: "LEFT", width: 0.49 },
            { text: " ", align: "CENTER", width: 0.55 },
            {
              text: `Taxable Amount: ${formatCurrency(data.totalTax, opts)}`,
              align: "RIGHT",
              width: 1,
            },
          ]);
      }
      printer
        .text("================================================")
        .size(1, 2)
        .tableCustom([
          { text: "Total:", align: "LEFT", width: 0.44 },
          { text: " ", align: "CENTER", width: 0.22 },
          {
            text: formatCurrency(data.GrandTotal),
            align: "RIGHT",
            width: 0.33,
          },
        ])
        .tableCustom([
          { text: "Change:", align: "LEFT", width: 0.44 },
          { text: " ", align: "CENTER", width: 0.22 },
          {
            text: formatCurrency(data.ChangeDue),
            align: "RIGHT",
            width: 0.33,
          },
        ])
        .tableCustom([
          { text: "Balance:", align: "LEFT", width: 0.44 },
          { text: " ", align: "CENTER", width: 0.22 },
          {
            text: formatCurrency(data.Balance),
            align: "RIGHT",
            width: 0.33,
          },
        ])
        .tableCustom([
          { text: `${data.paymentType}`, align: "LEFT", width: 0.44 },
          { text: " ", align: "CENTER", width: 0.22 },
          {
            text: formatCurrency(data.AmountPaid),
            align: "RIGHT",
            width: 0.33,
          },
        ])
        .text("================================================")
        .size(2, 2)
        .text("THANK YOU & VISIT AGAIN")
        .text(" ")
        .text(" ")
        .cut()
        .close();
    });
  });
}

// Splash Screen

function screenLoader() {
  const modalPath = path.join("file://", __dirname, "splashscreen.html");
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    fullscreen: true,
    transparent: true,
    resizable: false,
    icon: path.join(__dirname, "assets/img/icons/logo.png"),
  });

  win.on("close", function () {
    win = null;
  });
  win.loadURL(modalPath);
  // win.setResizable(false);
  win.show();

  // win.setIgnoreMouseEvents(true);
}

function createWindow() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    show: false,
    width,
    height,
    frame: false,
    fullscreen: true,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname, "assets/img/icons/logo.png"),
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, app_files),
      protocol: "file:",
      slashes: false,
    })
  );

  mainWindow.webContents.on(
    "new-window",
    (event, url, frameName, disposition, options, additionalFeatures) => {
      if (frameName === "modal") {
        // open window as modal
        event.preventDefault();
        Object.assign(options, {
          modal: true,
          parent: mainWindow,
          width: 600,
          height: 500,
        });
        event.newGuest = new BrowserWindow(options);
      }
    }
  );

  // mainWindow.on("close", () => {
  //   alert("Are you sure you want to exit out?");
  // });

  mainWindow.webContents.once("dom-ready", () => {
    mainWindow.setMinimumSize(1200, 600);

    win.close();
    //mainWindow.setMenu(null);
    mainWindow.maximize();
    mainWindow.show();
  });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  mainWindow.webContents.session.on(
    "will-download",
    (event, item, webContents) => {
      // Set the save path, making Electron not to prompt a save dialog.
      item.setSavePath("/tmp/save.pdf");

      item.on("updated", (event, state) => {
        if (state === "interrupted") {
          console.log("Download is interrupted but can be resumed");
        } else if (state === "progressing") {
          if (item.isPaused()) {
            console.log("Download is paused");
          } else {
            console.log(`Received bytes: ${item.getReceivedBytes()}`);
          }
        }
      });
      item.once("done", (event, state) => {
        if (state === "completed") {
          console.log("Download successfully");
        } else {
          console.log(`Download failed: ${state}`);
        }
      });
    }
  );
}

// IPC Render

ipcMain.on("do_print_receipt", (event, arg) => {
  console.log(arg); // prints "ping"
  event.reply("asynchronous-reply", "pong");
  example(arg);
});

ipcMain.on("show_notification", (event, arg) => {
  // console.log(arg);
  mainRender = event;

  const options1 = {
    type: arg.type,
    buttons: ["Cancel", "Yes, please", "No, thanks"],
    defaultId: 2,
    title: arg.data.title,
    message: arg.message,
    detail: arg.data.detail,
  };

  const options2 = {
    type: arg.type,
    defaultId: 2,
    title: arg.data.title,
    message: arg.message,
    detail: arg.data.detail,
  };

  dialog
    .showMessageBox(mainWindow, arg.state === "msgBox" ? options2 : options1)
    .then((result) => {
      if (result.response === 1) {
        event.reply("notification_reponse", {
          delete: true,
          deleteId: arg.data.id,
        });
      } else {
        event.reply("notification_reponse", { delete: false, deleteId: "" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.on("ready", () => {
  screenLoader();
  createWindow();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
