import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <div className='cart-details'>
                <p>selected items:{props.cart.length}</p>
                <p>Total Price:$</p>
                <p>Total Shipping Charge:$</p>
                <p>Tax:$</p>
                <h3>Grand Total:$</h3>
            </div>
        </div>
    );
};

export default Cart;