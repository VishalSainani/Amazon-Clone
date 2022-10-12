import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { image_ad } from './ImagesUrl'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad"
                    src={image_ad}
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            title={item.title}
                        />
                    ))};
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
