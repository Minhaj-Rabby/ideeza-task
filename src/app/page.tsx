'use client'
import { useContext } from 'react'
import React, { useEffect } from 'react'
import Product from './components/Product';
import { addToDb, getShoppingCart } from './utilities/fakedb';
import { AuthContext } from '../app/providers/providers';

interface ProductDetails {
    id: string,
    category: string,
    name: string,
    seller: string,
    price: number,
    stock: number,
    ratings: number,
    ratingsCount: number,
    img: string,
    shipping: number,
    quantity: number,
}

interface StoredCart  {
    [key: string]: number
}

export default function Home() {

    const { products, cart, setCart } = useContext(AuthContext);

    useEffect(() => {
        const storedCart= getShoppingCart();

        const savedCart: ProductDetails[] = [];
        
        for (const id in storedCart) {
            //step 2: get the Product using id
            const addedProduct : ProductDetails = products.find((product:ProductDetails)=> product.id === id)
            //step 3: Get quantity of product
            if (addedProduct) {

                const quantity = storedCart[id];

                addedProduct.quantity = quantity;

                //Step 4: add the product to the saved cart
                savedCart.push(addedProduct);
            }
            //step 5: Saved the cart
            setCart(savedCart);
        }
    }, [products])

    const handleAddToCart = (product:ProductDetails) => {
      
        let newCart = [];

        const exists = cart.find((pd:ProductDetails) => pd.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart= [...cart, product];

        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd:ProductDetails)  => pd.id !== product.id)
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <main className="">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 my-10 px-0 md:px-20">
                {
                    products.map((product:ProductDetails) => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
        </main>
    )
}
