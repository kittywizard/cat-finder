import { Link } from "react-router-dom";

export default function Nav(props) {

    return (
        <nav className="header-nav">
            <ul className="nav">
                <li className="nav-link">
                    <Link to="/favorite">
                        <button
                            onClick={props.modalDisplay}
                        >
                            <i className="fas fa-heart heart-link"></i>
                            {props.catCount !== 0 &&
                                <span className="cat-favorite-count">
                                    {props.catCount}
                                </span>
                            }
                        </button>
                    </Link>

                </li>
            </ul>
        </nav>
    )
}