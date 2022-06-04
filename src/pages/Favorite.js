import { useContext } from "react";
import { Context } from "../Context";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorite() {

  const {catFavorites} = useContext(Context);

  //catFavorites is an array with two properties - an array of cat objects and the number of favorites
  let favCatDisplay = catFavorites[0].map(cat => {
    return <FavoriteCard 
                cat={cat}
                key={cat.id}
            />
});

    return (
        <section className="favorite-page">
            <div className="modal-header">
                <h3 className="headline">
                    Favorites &nbsp;
                    <i className="fas fa-heart heart-link heart-link-active"></i>
                </h3>
            </div>
{/* 
        {
            catFavorites[0].length === 0 ?
            <div>
                Your favorites will appear here!
            </div> :
            <div className="modal-favorites">
                {favCatDisplay}
            </div>
        } */}
            <div className="modal-favorites">
                {favCatDisplay}
            </div>
        </section>
        
    )
}