import { useState, useEffect } from "react";

import CatCard from "../components/CatCard";
import Filter from "../components/Filter";

import { useContext } from "react";
import {Context} from "../Context";

export default function Cats() {

    //cat card / display & state 
  const {catData, toggle, catFilterArray} = useContext(Context);
  const catCardData = catData.map(cat => {
    return  <CatCard 
            data={cat}
            key={cat.id}
            toggle={toggle}
            />
  });

  console.log(catFilterArray)

  function handleChange() {
      //do a thing
      console.log('handle change')
  }



    return (
        <>
            <Filter 
                catFilters={catFilterArray}
                handleChange={handleChange}
            />
            <section className="card--container">
                {catCardData}
            </section>
        </>
    )
}