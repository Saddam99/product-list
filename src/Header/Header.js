import React from 'react';
import Menu from "./Menu";
import Checkout from "./Checkout/Checkout";
import Logo from "./Logo/Logo";

function Header(props) {
    return (
        <div className='header'>
            <Logo />
            <Menu />
            <Checkout product={props.product} />
        </div>
    );
}

export default Header;