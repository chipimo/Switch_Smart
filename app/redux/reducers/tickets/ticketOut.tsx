const uuidv4 = require("uuid/v4");
const { ipcRenderer } = require("electron");

const generateInvoiceNumber = (arr, type) => {
  var inistal = "A";
  var ending = "Z";
  var limit = 100000;
  var num = 0;
  var inv = "";

  if (arr.length === 0) {
    num = num + 1;
    inv = inistal + num;
  } else {
    arr.map(list => {
      num = list.invoiceN;
      inistal = list.invoiceL;
    });
    if (num !== limit && inistal === "A") {
      num = num + 1;
      inv = inistal + num;
    } else {
      inistal = "AB";
      num = num + 1;
      inv = inistal + num;
    }
  }

  if (type === "num") {
    return num;
  } else if (type === "LL") {
    return inistal;
  } else {
    return inv;
  }
};

function CreatId() {
  return uuidv4();
}
let Tickets = [];

const TicketOut = (
  state = {
    Tickets: []
  },
  action
) => {
  switch (action.type) {
    case "SAVETICKET":
      let invoice_number = generateInvoiceNumber(action.defaultList, "inv");
      let data = {
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
      } else {
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

      state = {
        ...state,
        Tickets: Tickets
      };
      break;
    case "RESTALL":
      state = {
        ...state,
        Tickets: []
      };
      break;
    default:
      return state;
  }

  return state;
};

export default TicketOut;
