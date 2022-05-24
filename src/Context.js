import { createContext, useState, useEffect } from "react";
import data from "./MockCatData.json";

const Context = createContext();

function ContextProvider({children}) {

    const [catData, setCatData] = useState(data);
    const [catFavorites, setCatFavorites] = useState([
        [], 0
      ]);
      
    //toggles the heart on each individual cat
    function toggle(id) {
        setCatData(prevState => {
            let updatedCatArray = prevState.map(cat => {
                    return id === cat.id ? {...cat, favorite: !cat.favorite} : cat
                })
                return updatedCatArray;
        })
    }

    useEffect(() => {
        //update state whenever the cat Data updates - as of right now, only favorites change
        let catFavsArray = catData.filter(cat => cat.favorite === true);
        setCatFavorites([catFavsArray, catFavsArray.length]);
      }, [catData]);

      //set up the filter state variable
      const filtered = catData.map(cat => {
          return {
              breed: cat.breed,
              isChecked: false,
              id: cat.id
          }
      });

      //reduce array to get rid of duplicate breeds
      const catFilterArray = filtered.reduce((accumulator, value) => {
          console.log(value.breed)
          return accumulator.includes(value.breed) ? accumulator : [...accumulator, value]
      }, [])

    return (
        <Context.Provider value={{catData, toggle, catFavorites, catFilterArray}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}