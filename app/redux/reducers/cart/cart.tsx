
let itemsList = [];
var newArry = [];

var isProductLoaded = false;
var initalPrice = 2;

function getUnique(arr, comp) {
  //   const filtered = arr.filter((v, i) => arr.indexOf(v) !== i);
  //   console.log(filtered);
  //   if(filtered.length!)

  const unique = arr
    .map(e => e[comp])
    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & store unique objects
    .filter(e => arr[e])
    .map(e => arr[e]);

  return unique;
}

function CountTotal(params) {
  var total = 0;

  params.forEach(function(item, index) {
    total += parseInt(item.sallingprice);
  });

  return total;
}

function AddQu(params) {
  params.items.map(items => {
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
  const index = arr.findIndex(x => x.productKey === item);
  arr.splice(index, 1);
  newArry = arr;
}

function RemoveQu(params) {
  params.items.map(items => {
    if (items.productKey === params.productKey) {
      initalPrice = parseInt(items.initalPrice);

      if (parseInt(items.sallingprice) === initalPrice) {
        // splice(params.items, items.productKey);
        // items.qnt = parseInt(items.qnt) - 1;
        newArry = params.items;
      } else {
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

const Cart = (
  state = {
    isItemInCart: false,
    total: 0,
    items: []
  },
  action
) => {
  switch (action.type) {
    case "ADDTOCART":
      Qnyquantity(action);

      state = {
        ...state,
        isItemInCart: true,
        total: CountTotal(itemsList),
        items: itemsList
      };
      break;
    case "REMOVEFROMCART":
      state = {
        ...state,
        isItemInCart: action.payload.isItemInCart,
        total: action.payload.total,
        items: action.payload.items
      };
      break;
    case "ADDQU":
      AddQu(action);

      state = {
        ...state,
        isItemInCart: true,
        total: CountTotal(newArry),
        items: newArry
      };
      break;
    case "REMOVEQU":
      RemoveQu(action);

      state = {
        ...state,
        isItemInCart: true,
        total: CountTotal(newArry),
        items: newArry
      };
      break;
    case "DELETEQU":
      remove(action.items, action.productKey);

      state = {
        ...state,
        isItemInCart: true,
        total: CountTotal(newArry),
        items: newArry
      };
      break;
    case "RESTATECART":
      itemsList = [];
      newArry = [];

      state = {
        ...state,
        isItemInCart: false,
        total: 0,
        items: []
      };
      break;
    default:
      return state;
  }

  return state;
};

export default Cart;
