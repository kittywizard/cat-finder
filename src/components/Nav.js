import { Link } from "react-router-dom";
import {useContext} from "react";
import { Context } from "../Context";

export default function Nav() {

    const {catFavorites} = useContext(Context);

    return (
        <nav className="header-nav">
            <ul className="nav">
                <li className="nav-link">
                    <Link to="/favorite">
                            <i className="fas fa-heart heart-link"></i>
                            <div className="favorite-count">{catFavorites[1]}</div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}