'use client'
import { useContext } from 'react';
import { AuthContext } from '../providers/providers';
import Link from 'next/link';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlelogOut = () => {
        logOut()
            .then((result) => {

            })
            .catch((error) => {
                console.error(error);
            })
    };
    return (

        <div className="navbar bg-slate-200 text-black font-bold sticky top-0 z-50">
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
                        <Link href="/orders" className=''>Order</Link>
                        <Link href="/inventory" className=''>Inventory</Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden sm:block ">
                <div>
                    <Link href="/">Shop</Link>
                    <Link href="/orders" className='mx-6'>Order</Link>
                    <Link href="/inventory" className='mr-6'>Inventory</Link>
                </div>
            </div>
            <div className="navbar-end sm:mr-20">
                {
                    user &&
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-slate-200 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
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

        </div>
    )
}

export default Header
