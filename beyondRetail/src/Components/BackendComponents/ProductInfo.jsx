import React, { useState } from 'react';
import mobiledata from '../../Data/mobile_data.json';
import { addToCart } from '../../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const data = mobiledata;
const ProductInfo = ({ intent, productName }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);
  const funToCart=((data)=>{
    console.log("function called")
    return (dispatch(addToCart(data)))
  })

  function getProductOrder(productName, data) {
    for (let item in data) {
      // const productTitle = data[item].title;
      // const productPrice = data[item].price;
      // const productImage = data[item].itemImg;
      let name = data[item].title.toString().toLowerCase();
      if (productName == name && !addedToCart) {
        // console.log('Dispatching addToCart action:', { productTitle, productPrice, productImage });
        setAddedToCart(true);

        return (funToCart(data[item]));
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

  let result;

  switch (intent) {
    case 'productSpecifications':
      result = getProductDetails(productName, data);
      break;
    case 'productAvailability':
      result = getProductAvailability(productName, data);
      break;
    case 'orderProduct':
      result = getProductOrder(productName, data);
      break;
    default:
      result = 'Invalid intent';
  }

  return (
    <div className='m-28 p-10 border rounded-lg shadow-lg shadow-teal-400'>
      <div>ProductInfo</div>
      <h1>{result}</h1>
    </div>
  );
};

export default ProductInfo;
