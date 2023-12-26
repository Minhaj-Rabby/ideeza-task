'use client'
import { useContext } from 'react';
import { AuthContext } from './providers';
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

        <nav className='flex justify-between p-4 bg-slate-200 text-black font-bold sticky top-0 z-50'>
            <Link href="/">Simple E-commerce</Link>
            <div className='flex'>
                <Link href="/">Shop</Link>
                <Link href="/orders" className='mx-6'>Order</Link>
                <Link href="/inventory" className='mr-6'>Inventory</Link>
                {
                    user ? <>
                        <span className='user-name'> {user.email}
                            <button onClick={handlelogOut} className='ml-4'>Sign Out</button>
                        </span></>
                        :
                        <>
                            <Link href="/login" className='mr-6'>LogIn</Link>
                            <Link href="/signup">SignUp</Link>
                        </>
                }

            </div>

        </nav>
    )
}

export default Header
