import React from 'react';
import shopping from './shopping-cart-solid.svg'


function Checkout(props) {
    const www = props.product.filter((item) => {
        return item.bought === true
    })
    return (
        <div className='checkout'>
            <img src={shopping} alt='shopping'/>
            <span className='counter'>
                {www.length}
            </span>
        </div>
    );
}

export default Checkout;