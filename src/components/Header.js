import Nav from './Nav';

export default function Header(props) {
    return (
        <header className="header">
            <div className="header--logo">
                <h1 className="header--logo-headline">Cat Finder</h1>
                <p className="header--logo-subhead">find your purrfect pal 🐈</p>
            </div>
            <Nav />
        </header>
    )
}