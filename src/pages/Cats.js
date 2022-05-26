import { useState, useEffect } from "react";

import CatCard from "../components/CatCard";

import { useContext } from "react";
import {Context} from "../Context";

export default function Cats() {

    //cat card / display & state 
  const {catData, toggle, catFilterData} = useContext(Context);
  const catCardData = catData.map(cat => {
    return  <CatCard 
            data={cat}
            key={cat.id}
            toggle={toggle}
            />
  });

        //update the list each time the catFilterData changes (user hit a checkbox)
        useEffect(() => {
            //diff variable, declare it else where?
            const catCardData = catData.map(cat => {
                //only if breed matches, return a component, otherwise nothing
                return  <CatCard 
                        data={cat}
                        key={cat.id}
                        toggle={toggle}
                        />
              });
            
        }, [catFilterData]);


    return (
        <>
            <section className="card--container">
                {catCardData}
            </section>
        </>
    )
}