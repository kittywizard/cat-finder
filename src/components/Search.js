import React from "react";

export default function Search() {

    const [location, setLocation] = React.useState(
        {
            locationName: "",
            locationEntered:false                             
        }
    );

    function handleChange(e) {

        const {name, value} = e.target;
        setLocation(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    function handleClick(e) {
        e.preventDefault();
        //when button is clicked, display the location on screen
        setLocation(prevState => {
            return {
                ...prevState,
                locationEntered: !prevState.locationEntered
            }
        })
        return;
    }

    return (
        <section className="search">
            <div className="current-location">
                <strong>Current Location: </strong> 
                {location.locationEntered && location.locationName}
            </div>
            <form 
                onSubmit={handleClick} 
                id="form">
                <i className="fas fa-map-marker-alt location-marker"></i>
                <input type="text" 
                        placeholder="City, State"
                        onChange={handleChange}
                        name="locationName"
                        value={location.locationName}/>
                <button type="submit" 
                        id="location-submit">Go</button>
            </form>
        </section>
    )
}