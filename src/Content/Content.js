import React from 'react';
import Card from "./Card";


function Content(props) {

    return (
        <div className="content">
            {props.product.map((item, index) => {
                return(
                    <Card
                        key={index}
                        product={item}
                        setBought={props.setBought}
                    />
                )
            })}
        </div>
    );
}

export default Content;