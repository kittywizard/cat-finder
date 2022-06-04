import Divider from "./Divider";
import React from "react";

export default function CatCard(props) {

    const {image, name, age, id, favorite, hometown, description, breed} = props.data;

    return (
        <div className="card">
            <img src={image} alt={name} className="card--image"/>
            <div className="card--title">
                <p className="card--cat-name">
                    {name}, {age}
                </p>
                <a href="#/" className="card--link">
                    <i className={!favorite ? "fas fa-heart heart-link" : "fas fa-heart heart-link heart-link-active"} 
                        onClick={() => props.toggle(id)}>
                    </i>
                </a>
            </div>
            <p className="card--cat-location">I'm from {hometown} and I'm a {breed} cat!</p>
            <div className="card--cat-desc">
                {description}
            </div>
            <Divider />
        </div>
       
    )
}