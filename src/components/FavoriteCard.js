import Divider from "./Divider";

export default function FavoriteCard({cat}) {
    return (
        <div className="modal-catGroup">
                <h4 className="modal-catName">{cat.name}</h4>
                    <div className="modal-catHeader">
                        <img src={cat.image} alt={cat.name} className="modal-image"/>
                            <p className="modal-catInfo">
                                <strong>Breed/Color:</strong> {cat.breed} <br />
                                <strong>Age: </strong>{cat.age} <br />
                                <strong>Location: </strong> {cat.hometown}
                            </p>
                    </div>
                    <Divider />
            </div>
    )
}