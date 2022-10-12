import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'

function Order({ order }) {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
            <p className='order__id'><small>{order.id}</small></p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    hideButton={false}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className='order__total'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                displayType={"text"}
                prefix={"$"}
                thousandSeparator={true}
                value={order.data.amount / 100}
            />
        </div>
    )
}

export default Order