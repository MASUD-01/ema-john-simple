import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Products.css'

const Products = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props
    const { img, name, price, seller, ratings } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h3>price:${price}</h3>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings} star</p>
            </div>

            <button
                onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Products;