function getProductDetails(productName, data) {
  for (let item in data) {
    let name = data[item].title.toString().toLowerCase();
    console.log(productName, name);
    if (productName == name) {
      console.log("matched");
      return `Product Details :${productName} is available. Price: ${data[item].price}`;
    }
  }
  return `Sorry, ${productName} is not found in the available products.`;
}

function getProductAvailability(productName, data) {
  for (let item in data) {
    let name = data[item].title.toString().toLowerCase();
    if (productName == name) {
      return `Available Products: ${productName} is available. Price: ${data[item].price}`;
    }
  }
  return `Sorry, ${productName} is not found in the available products.`;
}

function getProductOrder(productName,data){
  for (let item in data) {
    let name = data[item].title.toString().toLowerCase();
    if (productName == name) {

      return `Product ordered:${productName} is available. Price: ${data[item].price}`;
    }
  }
  return `Sorry, ${productName} is not found in the available products.`;
}

switch(intent){
  case "productDetails":
    result=getProductDetails(productName,data);
    break;
  case "productAvailability":
    result=getProductAvailability(productName,data);
  case "orderProduct":
    result=getProductOrder(productName,data)
}

data = [
  {
    title: "Nothing Phone",
    price: "\u20b945,999",
    itemImg:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/m/b/-original-imagrdefbw6bhbjr.jpeg?q=70",
  },
  {
    title: "Samsung Galaxy S21 FE",
    price: "\u20b932,999",
    itemImg:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70",
  },
  {
    title: "iPhone 12",
    price: "\u20b942,999",
    itemImg:
      "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
  },
];
console.log(getAvailableProducts( data));
