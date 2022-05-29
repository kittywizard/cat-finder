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
            //filter

            const catCardFilter = catFilterData.filter(cat => (cat.isChecked)).map(cat => cat.breed);
            console.log(catCardFilter)
            
            //map through catCardData to find the matching ones 
            //     //if array is empty, return all cats
            //  catCardData = catData.map(cat => {
            //     if(catCardFilter.length === 0) {
            //         return cat;
            //     } else {
            //         //check for breed before adding to array
            //         for(let i = 0; i > catCardFilter.length ; i++) {
                        
            //            cat.includes(catCardFilter[i]) ? [...cat] : cat
            //         }
            //     }
            // })

              setCatDisplay(catCardData);
            
        }, [catFilterData]);

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