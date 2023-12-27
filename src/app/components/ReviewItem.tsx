import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface Product {
    id: string;
    img: string;
    name: string;
    price: number;
    quantity: number;
}

interface ReviewItemProps {
    product: Product;
    handleRemoveFromCart: (id: string) => void;
}

const ReviewItem: FC<ReviewItemProps> = ({ product, handleRemoveFromCart }) => {

    const { img, id, price, name, quantity } = product;
    return (
        <div className='flex my-6 m-auto border-black border-2 rounded-2xl p-2 bg-slate-200 text-black '>
            <img src={img} alt={name} className='h-20 rounded-2xl border-2 border-black grow-0 ' />
            <div className='ml-4 font-medium grow '>
                <h6 className='product-title'>{name}</h6>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>${quantity}</span></p>

            </div>

            <button onClick={() => handleRemoveFromCart(id)} className='grow-0'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>

        </div>
    )
}

export default ReviewItem;