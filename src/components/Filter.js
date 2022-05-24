//import Radio from "./filters/Radio";
import Checkbox from "./filters/Checkbox";

export default function Filter(props) {

 
    const catFilterOptionDisplay = props.catFilterData.map(cat => {
            return  <Checkbox 
                        onChange={(e) => props.handleChange(e, cat.id)}
                        name={cat.breed}
                        isChecked={cat.isChecked}
                        id={cat.id}
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