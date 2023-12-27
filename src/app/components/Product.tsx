import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
interface Product {
    id: string;
    img: string;
    name: string;
    price: number;
    seller: string;
    ratings: number;
}

interface ProductProps {
    product: Product;
    handleAddToCart: (product: Product) => void;
}

const Product: FC<ProductProps> = ({ product, handleAddToCart }) => {
    const { id, img, name, price } = product;

    return (
        <div className="card card-compact w-[350px] md:w-96 mx-auto bg-base-100 border shadow-2xl">
            <figure>
                <img src={img} alt={name} className="p-4 rounded-3xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link href={`/product/${id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                        Add to Cart <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;