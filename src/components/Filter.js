//import Radio from "./filters/Radio";
import Checkbox from "./filters/Checkbox";

import { useContext } from "react";
import {Context} from "../Context";


export default function Filter(props) {
    const {setCatFilterData} = useContext(Context);


    function handleChange(id) {

        console.log(`handle change at ${id}`);
          setCatFilterData(prevState => prevState.map(filter => {
                return filter.id === id ? {...filter, isChecked: !filter.isChecked} : filter
            }
            ))
      }

 
    const catFilterOptionDisplay = props.catFilterData.map(cat => {
            return  <Checkbox 
                        handleChange={handleChange}
                        name={cat.breed}
                        isChecked={cat.isChecked}
                        id={cat.id}
                    />
    });

    return (
        <section className="card">
            <h4 className="filter-headline">Breed:</h4>
            <form className="filter-form">
                {catFilterOptionDisplay}
            </form>
        </section>
    )
}