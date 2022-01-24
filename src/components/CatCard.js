import data from "../data";

export default function CatCard(props) {

    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.name} className="card--image"/>
            <p className="card--cat-name">{props.data.name}, {props.data.age}</p>
            <div className="card--cat-desc">{props.data.description}</div>
        </div>
    )
}