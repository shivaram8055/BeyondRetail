import React from 'react'
import mobiledata from '../../Data/mobile_data.json'

const data=mobiledata
const ProductInfo = ({intent,productName}) => {
    function getProductDetails(productName,data){
        for(let item in data){
            let name=data[item].title.toString().toLowerCase()
        console.log(productName,name)
        if(productName==name){
            console.log("matched")
            return `${productName} is available. Price: ${data[item].price}`;
        }
        }
        return `Sorry, ${productName} is not found in the available products.`;
        
    }
    let result=getProductDetails(productName,data)

  return (
    <div className='m-28 p-10 border rounded-lg shadow-lg shadow-teal-400'>
    <div>ProductInfo</div>
    <h1>{result}</h1>
    </div>
  )
}

export default ProductInfo