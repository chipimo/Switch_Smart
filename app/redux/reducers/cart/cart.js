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
var itemsList = [];
var newArry = [];
var isProductLoaded = false;
var initalPrice = 2;
function getUnique(arr, comp) {
    //   const filtered = arr.filter((v, i) => arr.indexOf(v) !== i);
    //   console.log(filtered);
    //   if(filtered.length!)
    var unique = arr
        .map(function (e) { return e[comp]; })
        // store the keys of the unique objects
        .map(function (e, i, final) { return final.indexOf(e) === i && i; })
        // eliminate the dead keys & store unique objects
        .filter(function (e) { return arr[e]; })
        .map(function (e) { return arr[e]; });
    return unique;
}
function CountTotal(params) {
    var total = 0;
    params.forEach(function (item, index) {
        total += parseInt(item.sallingprice);
    });
    return total;
}
function AddQu(params) {
    params.items.map(function (items) {
        if (items.productKey === params.productKey) {
            initalPrice = parseInt(items.initalPrice);
            items.sallingprice = parseInt(items.sallingprice) + initalPrice;
            items.qnt = parseInt(items.qnt) + 1;
            items.amountInstore = items.amountInstore - 1;
            //   console.log(params.items);
            newArry = params.items;
        }
    });
}
function remove(arr, item) {
    var index = arr.findIndex(function (x) { return x.productKey === item; });
    arr.splice(index, 1);
    newArry = arr;
}
function RemoveQu(params) {
    params.items.map(function (items) {
        if (items.productKey === params.productKey) {
            initalPrice = parseInt(items.initalPrice);
            if (parseInt(items.sallingprice) === initalPrice) {
                // splice(params.items, items.productKey);
                // items.qnt = parseInt(items.qnt) - 1;
                newArry = params.items;
            }
            else {
                items.sallingprice = parseInt(items.sallingprice) - initalPrice;
                items.amountInstore = items.amountInstore + 1;
                items.qnt = parseInt(items.qnt) - 1;
                //   console.log(params.items);
                newArry = params.items;
            }
        }
    });
}
function Qnyquantity(params) {
    if (!params.payload.items.isAddedToCart) {
        params.payload.items.amountInstore = params.payload.items.amountInstore - 1;
        params.payload.items.isAddedToCart = true;
    }
    itemsList.push(params.payload.items);
    itemsList = getUnique(itemsList, "productKey");
}
var Cart = function (state, action) {
    if (state === void 0) { state = {
        isItemInCart: false,
        total: 0,
        items: []
    }; }
    switch (action.type) {
        case "ADDTOCART":
            Qnyquantity(action);
            state = __assign({}, state, { isItemInCart: true, total: CountTotal(itemsList), items: itemsList });
            break;
        case "REMOVEFROMCART":
            state = __assign({}, state, { isItemInCart: action.payload.isItemInCart, total: action.payload.total, items: action.payload.items });
            break;
        case "ADDQU":
            AddQu(action);
            state = __assign({}, state, { isItemInCart: true, total: CountTotal(newArry), items: newArry });
            break;
        case "REMOVEQU":
            RemoveQu(action);
            state = __assign({}, state, { isItemInCart: true, total: CountTotal(newArry), items: newArry });
            break;
        case "DELETEQU":
            remove(action.items, action.productKey);
            state = __assign({}, state, { isItemInCart: true, total: CountTotal(newArry), items: newArry });
            break;
        case "RESTATECART":
            itemsList = [];
            newArry = [];
            state = __assign({}, state, { isItemInCart: false, total: 0, items: [] });
            break;
        default:
            return state;
    }
    return state;
};
exports.default = Cart;
//# sourceMappingURL=cart.js.map