export default function Search() {
    
    function handleClick(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <section className="search">
            <div className="current-location"><strong>Current Location: </strong> Kirkland, WA</div>
            <form>
                <i className="fas fa-map-marker-alt location-marker"></i>
                <input type="text" placeholder="test"/>
                <button type="submit" id="location-submit" onClick={(e) => handleClick(e)}>Go</button>
            </form>
        </section>
    )
}