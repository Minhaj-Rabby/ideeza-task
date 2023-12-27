'use client'
import React, { useContext } from 'react'
import Cart from '../components/Cart'
import { AuthContext } from '../providers/providers';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import ReviewItem from '../components/ReviewItem';

const page = () => {

    const { cart, setCart } = useContext(AuthContext);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleclearFromCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='flex justify-center gap-10 flex-col sm:flex-row'>
            <div className='bg-slate-200 text-black mt-6 p-4  sm:order-1 rounded-3xl'>
                <Cart handleclearFromCart={handleclearFromCart}></Cart>
            </div>
            <div>
                <div>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveFromCart={handleRemoveFromCart}
                        >
                        </ReviewItem>)
                    }
                </div>

            </div>
            {/* <div className='bg-slate-200 text-black mt-6 p-4 order-0 sm:order-1 rounded-3xl'>
                <Cart handleclearFromCart={handleclearFromCart}></Cart>
            </div> */}

        </div>
    )
}

export default page
