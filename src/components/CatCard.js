import Divider from "./Divider";
import React from "react";

export default function CatCard(props) {


    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.name} className="card--image"/>
            <div className="card--title">
                <p className="card--cat-name">
                    {props.data.name}, {props.data.age}
                </p>
                <a href="#/" className="card--link">
                    <i className={!props.data.favorite ? "fas fa-heart heart-link" : "fas fa-heart heart-link heart-link-active"} 
                        onClick={() => props.toggle(props.data.id)}>
                    </i>
                </a>
            </div>
            <p className="card--cat-location">{props.data.hometown}</p>
            <div className="card--cat-desc">
                {props.data.description}
            </div>
            <Divider />
        </div>
       
    )
}