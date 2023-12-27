import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../providers/providers';
import Link from 'next/link';

const Cart = ({ handleclearFromCart }) => {

    const { cart } = useContext(AuthContext);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * .1;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='font-semibold text-lg'>
            <h5 className='text-2xl font-bold text-center my-3'>Order Summery</h5>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleclearFromCart} className='btn btn-primary text-lg font-bold w-full my-4'>
                Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <Link className='btn btn-primary text-lg font-bold w-full' href="/checkout">
                <button className='' >
                    Proceed Checkout
                    <FontAwesomeIcon className='ml-2' icon={faCreditCard} />
                </button>
            </Link>
        </div>
    )
}

export default Cart