import { useContext } from "react";
import { Context } from "../Context";
import Divider from "../components/Divider";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorite() {

  const {catFavorites} = useContext(Context);

  console.log(catFavorites)

  //catFavorites is an array with two properties - an array of cat objects and the number of favorites
  let favCatDisplay = catFavorites[0].map(cat => {
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
        <section>
            <div className="modal-header">
                <h3 className="headline">
                    Favorites &nbsp;
                    <i className="fas fa-heart heart-link heart-link-active"></i>
                </h3>
            </div>

            <div className="modal-favorites">
                {favCatDisplay}
            </div>
        </section>
        
    )
}