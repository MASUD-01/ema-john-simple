import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-name'>
                <a href="/shop">Shop</a>
                <a href="/order">order</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;