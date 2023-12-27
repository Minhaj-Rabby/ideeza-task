'use client'
import Link from 'next/link';
import { AuthContext } from '../../providers/providers';
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const page = ({ params }) => {
    const id = params.productdetails;
    const { products } = useContext(AuthContext);

    const selectedproduct = products.find(product => product.id === id)
    const { img, name, price, seller, ratings, category, stock, ratingsCount, shipping } = selectedproduct;

    return (
        <div className="card card-compact w-[350px] md:w-96 bg-base-100 border shadow-2xl mt-6 mx-auto">
            <figure><img src={img} alt={name} className='p-4 rounded-3xl' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="text-lg">Category: {category}</h2>

                <div className="flex">
                    <p className='card-text flex-1'>Available Stock: {stock}</p>
                    <p className='card-text flex-1'>Seller: {seller}</p>
                </div>
                <div className="flex">

                    <p className='card-text flex-1'>Price: ${price}        </p>
                    <p className='card-text flex-1'>Shipping Cost: ${shipping}</p>
                </div>
                <div className="flex">
                    <p className='card-text flex-1'>Ratings: {ratings} Star</p>
                    <p className='card-text flex-1'>Total Review: {ratingsCount}</p>
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link href={`/`} className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default page
