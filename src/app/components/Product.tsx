import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { img, name, price, seller, ratings ,id} = product;

    return (
        

            <div className="card card-compact w-96 bg-base-100 border shadow-2xl">
                <figure><img src={img} alt={name} className='p-4 rounded-3xl' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='card-text'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                     <Link href={`/product/${id}`}className="btn btn-primary">See Details</Link> 
                        <button onClick={() => handleAddToCart(product)}  className="btn btn-primary">Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
                    </div>
                </div>
            </div>

    )
}

export default Product