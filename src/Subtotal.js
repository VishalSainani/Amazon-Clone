import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom';
function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue()
    //     return sum
    // }
    function handleProceedButton() {
        history.push("/payment");
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items):
                            {/* Subtotal(0 items): */}
                            <strong>{`${value}`}</strong>
                            {/* <strong>0</strong> */}
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                displayType={"text"}
                prefix={"$"}
                thousandSeparator={true}
                value={getBasketTotal(basket)}
            />
            <button onClick={handleProceedButton}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal