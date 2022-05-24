//import Radio from "./filters/Radio";
import Checkbox from "./filters/Checkbox";

export default function Filter(props) {

    //map options and create a checkbox for each
        //need to kill the duplicates though
        //unchecked by default

 
    const catFilterOptionDisplay = props.catFilters.map(cat => {
            return  <Checkbox 
                        id={cat.id}
                        onChange={props.handleChange}
                        name={cat.breed}
                        key={cat.id}
                    />
    });

    return (
        <section className="card">
            <form>
                {catFilterOptionDisplay}
            </form>
        </section>
    )
}