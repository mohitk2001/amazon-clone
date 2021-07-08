import React from 'react'
import "./SubTotal.css"
import { useStateValue } from './StateProvide'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer'
function SubTotal() {
    const [{basket},dispatch]=useStateValue()
    return (
        <div  className="subtotal">
        <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal ({basket.length} items): <strong>{`${value}`}</strong> </p>
                <small className="subtotal_gift">
                   <input type="checkbox" />This order conatin's a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}



        />
           <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
