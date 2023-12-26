'use client'
import Link from 'next/link';

const Header = () => {

    return (
        <nav className='flex justify-between p-4 bg-slate-200 text-black font-bold'>
            <Link href="/">Simple E-commerce</Link>
            <div className='flex'>
                <Link href="/">Shop</Link>
                <Link href="/orders" className='mx-6'>Order</Link>
                <Link href="/inventory" className='mr-6'>Inventory</Link>

                <div>
                    <Link href="/login" className='mr-6'>LogIn</Link>
                    <Link href="/signup">SignUp</Link>
                </div>


            </div>

        </nav>
    )
}

export default Header
