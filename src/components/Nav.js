export default function Nav(props) {

    return (
        <nav className="header-nav">
            <ul className="nav">
                <li className="nav-link">
                    <a href="#/"
                        onClick={props.modalDisplay}
                    >
                        <i className="fas fa-heart heart-link"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}