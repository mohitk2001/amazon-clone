import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvide";
function Products({ id, title, image, price, rating }) {
    const [{basket},dispatch]=useStateValue()
   // console.log(basket)
    const AddtoBasket=()=>{
      //Add To basket
      dispatch({
          type:"ADD_TO_BAS",
          item:{
              id:id,
              title:title,
              image:image,
              price:price,
              rating:rating
          }
      })
    }
  return (
    <div className="products">
      <div className="products_info">
        <p>{title}</p>
        <p className="product_price">{price}</p>
        <div className="product_ratings">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p key={Math.random()}>⭐</p>;
            })}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={()=>AddtoBasket()}>Add to Cart</button>
    </div>
  );
}

export default Products;
