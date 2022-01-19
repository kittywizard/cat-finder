export default function CatCard(props) {
    return (
        <div className="card">
            <p className="card--cat-name">{props.data[0].name}, {props.data[0].age}</p>
        </div>
    )
}