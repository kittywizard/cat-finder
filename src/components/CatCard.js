import data from "../data";
import Divider from "./Divider";


export default function CatCard(props) {

    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.name} className="card--image"/>
            <div className="card--title">
                <p className="card--cat-name">
                    {props.data.name}, {props.data.age}
                </p>
                <a href="#" className="card--link">
                    <i className="fas fa-heart heart-link"></i>
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