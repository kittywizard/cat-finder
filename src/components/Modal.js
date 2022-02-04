import Divider from "./Divider";


export default function Modal(props) {

    let favoriteCats = props.data.filter(cat => cat.favorite === true);
    let favCatDisplay = favoriteCats.map(cat => {
        return <div className="modal-catGroup">
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
    });
    
    return (
        <section className="modal">
            <div className="modal-header">
                <h3 className="headline">
                    Favorites &nbsp;
                    <i className="fas fa-heart heart-link heart-link-active"></i>
                </h3>
                <h1 
                    className="modal-close"
                    onClick={props.modalDisplay}>
                        X
                </h1>
            </div>

            <div className="modal-favorites">
                {favCatDisplay}
            </div>
        </section>
    )
}