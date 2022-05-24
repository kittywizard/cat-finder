import { useState, useEffect } from "react";

import CatCard from "../components/CatCard";
import Filter from "../components/Filter";

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

  function handleChange() {
      //do a thing
      console.log('handle change')
  }



    return (
        <>
            <Filter 
                catFilters={catFilterData}
                handleChange={handleChange}
            />
            <section className="card--container">
                {catCardData}
            </section>
        </>
    )
}