import React from 'react';

function Button(props) {

    return (
        <div className="card-button">
            {props.bought === false ?
            <button
                className="btn"
                onClick={() => props.setBought(props.id)}>
                Добавить в корзину
            </button> :
                <button
                    disabled
                    className="btn"
                    onClick={() => props.setBought(props.id)}>
                    Добавить в корзину
                </button>
            }
        </div>
    );
}

export default Button;