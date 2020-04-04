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
var uuidv4 = require("uuid/v4");
var ipcRenderer = require("electron").ipcRenderer;
var generateInvoiceNumber = function (arr, type) {
    var inistal = "A";
    var ending = "Z";
    var limit = 100000;
    var num = 0;
    var inv = "";
    if (arr.length === 0) {
        num = num + 1;
        inv = inistal + num;
    }
    else {
        arr.map(function (list) {
            num = list.invoiceN;
            inistal = list.invoiceL;
        });
        if (num !== limit && inistal === "A") {
            num = num + 1;
            inv = inistal + num;
        }
        else {
            inistal = "AB";
            num = num + 1;
            inv = inistal + num;
        }
    }
    if (type === "num") {
        return num;
    }
    else if (type === "LL") {
        return inistal;
    }
    else {
        return inv;
    }
};
function CreatId() {
    return uuidv4();
}
var Tickets = [];
var TicketOut = function (state, action) {
    if (state === void 0) { state = {
        Tickets: []
    }; }
    switch (action.type) {
        case "SAVETICKET":
            var invoice_number = generateInvoiceNumber(action.defaultList, "inv");
            var data = {
                id: CreatId(),
                invoiceNumber: invoice_number,
                invoiceN: generateInvoiceNumber(action.defaultList, "num"),
                invoiceL: generateInvoiceNumber(action.defaultList, "LL"),
                ticketList: action.payload.ticketList,
                TotalCost: action.payload.GrandTotal,
                TotalPaid: action.payload.AmountPaid,
                ChangeDue: action.payload.ChangeDue,
                Balance: action.payload.Balance,
                Customer: action.payload.Customer,
                Date: action.payload.Date
            };
            if (Tickets.length === 0) {
                Tickets = action.defaultList;
                Tickets.push(data);
            }
            else {
                Tickets.push(data);
            }
            // console.log(Tickets);
            // generateInvoiceNumber(action.defaultList);
            ipcRenderer.send("do_print_receipt", {
                GrandTotal: action.payload.GrandTotal,
                AmountPaid: action.payload.AmountPaid,
                ChangeDue: action.payload.ChangeDue,
                Balance: action.payload.Balance,
                user: action.payload.user,
                paymentType: action.payload.paymentType,
                isTaxInvoice: action.payload.isTaxInvoice,
                taxRate: action.payload.taxRate,
                totalTax: action.payload.totalTax,
                items: action.payload.toPrint,
                invoiceNumber: invoice_number
            });
            state = __assign({}, state, { Tickets: Tickets });
            break;
        case "RESTALL":
            state = __assign({}, state, { Tickets: [] });
            break;
        default:
            return state;
    }
    return state;
};
exports.default = TicketOut;
//# sourceMappingURL=ticketOut.js.map