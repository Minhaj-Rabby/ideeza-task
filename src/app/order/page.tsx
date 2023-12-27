'use client'
import React, { useContext, FC } from 'react';
import Cart from '../components/Cart';
import { AuthContext } from '../providers/providers';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import ReviewItem from '../components/ReviewItem';

interface Product {
    id: string;
    img: string;
    name: string;
    price: number;
    seller: string;
    ratings: number;
    category: string;
    stock: number;
    ratingsCount: number;
    shipping: number;
    quantity: number
}

const page: FC = () => {

    const { cart, setCart } = useContext(AuthContext);

    const handleRemoveFromCart = (id: string) => {
        const remaining: Product = cart.filter((product: Product) => product.id !== id);
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
                        cart.map((product: Product) => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveFromCart={handleRemoveFromCart}
                        >
                        </ReviewItem>)
                    }
                </div>

            </div>

        </div>

    )
}

export default page;
