'use client'
import { useContext } from 'react'
import React, { useEffect, useState } from 'react'
import Product from './components/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from './utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { AuthContext } from '../app/providers/providers';

export default function Home() {

  const [cart, setCart] = useState([]);
  const {products}=useContext(AuthContext);

  console.log(products)

  useEffect(() => {
      const storedCart = getShoppingCart();
      const savedCart = [];
      //step1 : get id
      for (const id in storedCart) {
          //step 2: get the Product using id
          const addedProduct = products.find(product => product.id === id)

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

  const handleAddToCart = (product) => {
      //const newCart = [...cart, product];

      let newCart = [];

      // if priduct doesnot exist in the cart set the quantity=1
      // if exists update quantity by 1

      const exists = cart.find(pd => pd.id === product.id)
      if (!exists) {
          product.quantity = 1;
          newCart = [...cart, product];

      }
      else {
          exists.quantity = exists.quantity + 1;
          const remaining = cart.filter(pd => pd.id !== product.id)
          newCart = [...remaining, exists];
      }
      setCart(newCart);
      addToDb(product.id);
  }
  const handleclearFromCart = () => {
      setCart([]);
      deleteShoppingCart();
  }
  return (
    <main className="">
            <div className="grid grid-cols-3 gap-10 my-10 px-20">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                
                  <h2>{cart.length}</h2>
                
            </div>
    </main>
  )
}
