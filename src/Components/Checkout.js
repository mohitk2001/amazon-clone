import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvide";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <>
            <h1>Your Shopping Cart is Empty</h1>
            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
            <img
              className="oops"
              src="https://previews.123rf.com/images/arcady31/arcady311303/arcady31130300032/18519959-vector-oops-symbol.jpg"
              alt=""
            />
          </>
        ) : (
          <div>
            <h2 className="checkout_title">Your shopping cart</h2>
            {basket.map((item) => (
              <CheckoutProduct
                key={Math.random()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
