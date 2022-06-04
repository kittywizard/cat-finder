import { useState, useEffect } from "react";

import CatCard from "../components/CatCard";

import { useContext } from "react";
import {Context} from "../Context";

export default function Cats() {

    //cat card / display & state 
  const {catData, toggle, catFilterData} = useContext(Context);
  const [catDisplay, setCatDisplay] = useState([]);
  let catCardData = [];

    //update the list each time the catFilterData changes (user hit a checkbox)
    useEffect(() => {

        const catCardFilter = catFilterData.filter(cat => (cat.isChecked)).map(cat => cat.breed);
        
            catCardData = catData.filter(cat => {
            if(catCardFilter.length === 0) {
                return cat;
            } else {
                //check for breed before adding to array
                return catCardFilter.includes(cat.breed) && cat 
            }
        })

        setCatDisplay(catCardData);
        
    }, [catFilterData, catData]);

    const catCardDisplayData = catDisplay.map(cat => {
        return  <CatCard 
                data={cat}
                key={cat.id}
                toggle={toggle}
                />
    });


    return (
        <>
            <section className="card--container">
                {catCardDisplayData}
            </section>
        </>
    )
}