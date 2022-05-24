import { useState, useEffect } from "react";

import CatCard from "../components/CatCard";
import Filter from "../components/Filter";

import { useContext } from "react";
import {Context} from "../Context";

export default function Cats() {

    //cat card / display & state 
  const {catData, toggle, catFilterData, setCatFilterData} = useContext(Context);
  const catCardData = catData.map(cat => {
    return  <CatCard 
            data={cat}
            key={cat.id}
            toggle={toggle}
            />
  });

  function handleChange(event, id) {

      setCatFilterData(prevState => prevState.map(filter => {
            return filter.id === id ? {...filter, isChecked: !filter.isChecked} : filter
        }
        
        ))
  }



    return (
        <>
            <Filter 
                catFilterData={catFilterData}
                handleChange={handleChange}
            />
            <section className="card--container">
                {catCardData}
            </section>
        </>
    )
}