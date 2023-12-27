'use client'
import React, { useContext, FC } from 'react';
import { AuthContext } from '../providers/providers';
import Link from 'next/link';

const Header: FC = () => {
    const { user, logOut, cart } = useContext(AuthContext);
    const handlelogOut = () => {
        logOut()
            .then((result: any) => {

            })
            .catch((error: any) => {
                console.error(error);
            })
    };

    let totalPrice: number = 0;
    let totalShipping: number = 0;
    let quantity: number = 0;

    for (const product of cart) {
 
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax: number = totalPrice * .1;
    const grandTotal: number = totalPrice + totalShipping + tax;

    return (

        <nav className="navbar bg-slate-200 text-black font-bold sticky top-0 z-50 w-full ">
            <div className="navbar-start ">
                <div className=' pl-20 hidden sm:block '>
                    <Link href="/">E-Commerce</Link>
                </div>
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52">
                        <Link href="/">Shop</Link>
                        <Link href="/order" className=''>Order</Link>
                        <Link href="/checkout" className='mr-6'>CheckOut</Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden sm:block ">
                <div>
                    <Link href="/">Shop</Link>
                    <Link href="/order" className='mx-6'>Order</Link>
                    <Link href="/checkout" className='mr-6'>CheckOut</Link>
                </div>
            </div>
            <div className="navbar-end sm:mr-20">
                {
                
                    <div className="dropdown dropdown-end mr-4">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{quantity}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-slate-200 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{quantity} Items</span>
                                <span className="text-info">Subtotal: ${grandTotal}</span>
                                <div className="card-actions">
                                    <Link href='/order' className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    user ? <>
                        <div className="dropdown dropdown-end ml-6">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user.email}
                                    </a>
                                </li>
                                <li><button onClick={handlelogOut} >Logout</button></li>
                            </ul>
                        </div>
                    </> :
                        <>
                            <Link className='' href="/login">logIn</Link>
                            <Link className='ml-6' href="/signup">SignUp</Link>
                        </>
                }
            </div>

        </nav>
    )
}
export default Header;
