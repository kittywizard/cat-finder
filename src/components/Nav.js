export default function Nav(props) {

    console.log(props.catCount);

    return (
        <nav className="header-nav">
            <ul className="nav">
                <li className="nav-link">
                    <a href="#/"
                        onClick={props.modalDisplay}
                    >
                        <i className="fas fa-heart heart-link"></i>
                        {props.catCount !== 0 &&
                            <span className="cat-favorite-count">
                                {props.catCount}
                            </span>
                        }
                    </a>
                </li>
            </ul>
        </nav>
    )
}