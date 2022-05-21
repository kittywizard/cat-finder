import { useState, useEffect } from "react";

import CatCard from "../components/CatCard";
//import Search from "../components/Search";
import Filter from "../components/Filter";

import { useContext } from "react";
import {Context} from "../Context";

export default function Cats() {

    //cat card / display & state 
  const {catData, toggle} = useContext(Context);
  const catCardData = catData.map(cat => {
    return  <CatCard 
            data={cat}
            key={cat.id}
            toggle={toggle}
            />
  });


  //checkbox logic
  let catFilterArray = catData.map(cat => {
      return {
          breed: cat.breed,
          isChecked: false
      }
  });


  const [catFilterOptions, setCatFilterOptions] = useState([]);



  function handleChange(id) {
    console.log('update state');
    setCatFilterOptions(prevState => {
        //do a thing
    });
  }


    return (
        <>
            <Filter 
                catFilters={catFilterOptions}
                handleChange={handleChange}
            />
            <section className="card--container">
                {catCardData}
            </section>
        </>
    )
}