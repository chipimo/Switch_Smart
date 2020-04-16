var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require("path");
var url = require("url");
var _a = require("electron"), webContents = _a.webContents, ipcMain = _a.ipcMain;
var formatCurrency = require("format-currency");
var moment = require("moment");
var escpos = require("escpos");
var mainWindow;
var dialog = require("electron").dialog;
var app_files = "/app/index.html";
var win;
var mainRender;
// Printer
escpos.USB = require("escpos-usb");
function example(data) {
    var device = new escpos.USB();
    var options = { encoding: "GB18030" /* default */ };
    var printer = new escpos.Printer(device, options);
    var tux = path.join(__dirname, "assets/invoice_logo.png");
    var check = moment(new Date());
    var time = check.format("LT");
    var opts = { format: "%s%v %c", code: "ZMK", symbol: "K" };
    escpos.Image.load(tux, function (image) {
        device.open(function (error) {
            printer.align("ct").image(image, "s8");
            printer
                .font("a")
                .align("ct")
                .style("bu")
                .size(1, 1)
                .text("Cash Sale Receipt No:" + data.invoiceNumber)
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
                    text: "Date: " + moment().format("DD-MMM-YYYY"),
                    align: "LEFT",
                    width: 0.44,
                },
                { text: " ", align: "CENTER", width: 0.2 },
                { text: "Time: " + time, align: "RIGHT", width: 0.4 },
            ])
                .tableCustom([
                { text: "Casher : " + data.user, align: "LEFT", width: 1 },
            ])
                .text(" ")
                .text("---------------------------------------------");
            data.items.forEach(function (element) {
                printer.tableCustom([
                    {
                        text: element.ItemName + " * " + element.Qty,
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
                        text: "%" + data.taxRate + " Tax Amount: " + data.taxRate / 100,
                        align: "RIGHT",
                        width: 1,
                    },
                ])
                    .tableCustom([
                    { text: " ", align: "LEFT", width: 0.49 },
                    { text: " ", align: "CENTER", width: 0.55 },
                    {
                        text: "Taxable Amount: " + formatCurrency(data.totalTax, opts),
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
                { text: "" + data.paymentType, align: "LEFT", width: 0.44 },
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
    var modalPath = path.join("file://", __dirname, "splashscreen.html");
    var _a = electron.screen.getPrimaryDisplay().workAreaSize, width = _a.width, height = _a.height;
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
    var _a = electron.screen.getPrimaryDisplay().workAreaSize, width = _a.width, height = _a.height;
    mainWindow = new BrowserWindow({
        show: false,
        width: width,
        height: height,
        frame: false,
        fullscreen: true,
        transparent: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: path.join(__dirname, "assets/img/icons/logo.png"),
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, app_files),
        protocol: "file:",
        slashes: false,
    }));
    mainWindow.webContents.on("new-window", function (event, url, frameName, disposition, options, additionalFeatures) {
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
    });
    // mainWindow.on("close", () => {
    //   alert("Are you sure you want to exit out?");
    // });
    mainWindow.webContents.once("dom-ready", function () {
        mainWindow.setMinimumSize(1200, 600);
        win.close();
        //mainWindow.setMenu(null);
        mainWindow.maximize();
        mainWindow.show();
    });
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
    mainWindow.webContents.session.on("will-download", function (event, item, webContents) {
        // Set the save path, making Electron not to prompt a save dialog.
        item.setSavePath("/tmp/save.pdf");
        item.on("updated", function (event, state) {
            if (state === "interrupted") {
                console.log("Download is interrupted but can be resumed");
            }
            else if (state === "progressing") {
                if (item.isPaused()) {
                    console.log("Download is paused");
                }
                else {
                    console.log("Received bytes: " + item.getReceivedBytes());
                }
            }
        });
        item.once("done", function (event, state) {
            if (state === "completed") {
                console.log("Download successfully");
            }
            else {
                console.log("Download failed: " + state);
            }
        });
    });
}
// IPC Render
ipcMain.on("do_print_receipt", function (event, arg) {
    console.log(arg); // prints "ping"
    event.reply("asynchronous-reply", "pong");
    example(arg);
});
ipcMain.on("show_notification", function (event, arg) {
    // console.log(arg);
    mainRender = event;
    var options1 = {
        type: arg.type,
        buttons: ["Cancel", "Yes, please", "No, thanks"],
        defaultId: 2,
        title: arg.data.title,
        message: arg.message,
        detail: arg.data.detail,
    };
    var options2 = {
        type: arg.type,
        defaultId: 2,
        title: arg.data.title,
        message: arg.message,
        detail: arg.data.detail,
    };
    dialog
        .showMessageBox(mainWindow, arg.state === "msgBox" ? options2 : options1)
        .then(function (result) {
        if (result.response === 1) {
            event.reply("notification_reponse", {
                delete: true,
                deleteId: arg.data.id,
            });
        }
        else {
            event.reply("notification_reponse", { delete: false, deleteId: "" });
        }
    })
        .catch(function (err) {
        console.log(err);
    });
});
app.on("ready", function () {
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
//# sourceMappingURL=main.js.map