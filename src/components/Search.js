export default function Search() {
    return (
        <section className="search">
            <div className="current-location">Current Location:</div>
            <form>
                <i className="fas fa-map-marker-alt location-marker"></i>
                <input type="text" placeholder="test"/>
            </form>
        </section>
    )
}