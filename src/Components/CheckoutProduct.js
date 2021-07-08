import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvide";
function CheckoutProduct({ id, title, image, price, rating }) {
     //console.log( id, title, image, price, rating)
    const [{basket},dispatch]=useStateValue()
    const removeItem=()=>{
        dispatch({
            type:"REMOVE_FROM_BAS",
            id:id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkout_Info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">{price}</p>
        <div className="product_ratings">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p key={Math.random()}>⭐</p>;
            })}
        </div>
        <button onClick={()=>removeItem()} >Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
