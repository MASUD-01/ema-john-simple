import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    console.log(props.cart)
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandtotal = total + shipping + tax;
    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <div className='cart-details'>
                <p>selected items:{cart.length}</p>
                <p>Total Price:${total}</p>
                <p>Total Shipping Charge:${shipping}</p>
                <p>Tax:${tax}</p>
                <h3>Grand Total:${grandtotal}</h3>
            </div>
        </div>
    );
};

export default Cart;