import Nav from './Nav';
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="header">
            <div className="header--logo">
                <Link to="/" className='router-link'>
                    <h1 className="header--logo-headline">Cat Finder</h1>
                </Link>
                <p className="header--logo-subhead">find your purrfect pal 🐈</p>
            </div>
            <Nav />
        </header>
    )
}