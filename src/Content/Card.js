import React from 'react';
import Button from "./Button";
function Card(props) {
    return (
       <div className="card">
           <div className="card-image">
               <img src={props.prod.image} alt=""/>
           </div>
           <div className="card-info">
               <div className="card-name">{props.prod.name}</div>
               <div className="card-price">{props.prod.price}</div>
               <Button
                   setBought={props.setBought}
                   id={props.prod.id}
                   bought={props.prod.bought}
               />
           </div>
        </div>
    );
}

export default Card;