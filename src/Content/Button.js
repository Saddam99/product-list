import React from 'react';

function Button(props) {


    return (
        <div className="card-button">
            <button
                className="btn"
                id={props.id}
                onClick={props.setBought}>
                Добавить в корзину
            </button>
        </div>
    );
}

export default Button;