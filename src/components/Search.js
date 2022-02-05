import React from "react";

export default function Search() {

    const [location, setLocation] = React.useState("Kirkland, WA");
    
    function handleClick(e) {
        e.preventDefault();

        const {name, value} = e.target;

        console.log(e.target);
    }

    return (
        <section className="search">
            <div className="current-location"><strong>Current Location: </strong> {location}</div>
            <form onSubmit={handleClick} id="form">
                <i className="fas fa-map-marker-alt location-marker"></i>
                <input type="text" placeholder="City, State"/>
                <button type="submit" id="location-submit" onClick={(e) => handleClick(e)}>Go</button>
            </form>
        </section>
    )
}