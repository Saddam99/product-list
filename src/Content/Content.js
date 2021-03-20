import React from 'react';
import Card from "./Card";


function Content(props) {

    return (
        <div className="content">
            {props.product.map((item, index) => {
                return(
                    <Card
                        key={index}
                        prod={item}
                        setBought={props.setBought}
                        product={props.product}

                    />
                )
            })}

        </div>
    );
}

export default Content;