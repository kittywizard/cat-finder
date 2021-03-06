import { createContext, useState, useEffect } from "react";
import data from "./MockCatData.json";

const Context = createContext();

function ContextProvider({children}) {

    const [catData, setCatData] = useState(data);
    const [catFavorites, setCatFavorites] = useState([
        [], 0
      ]);
      const [catFilterData, setCatFilterData] = useState([]);
      
    //toggles the heart on each individual cat
    function toggle(id) {
        setCatData(prevState => {
            let updatedCatArray = prevState.map(cat => {
                    return id === cat.id ? {...cat, favorite: !cat.favorite} : cat
                })
                return updatedCatArray;
        });
    }

    //update favorites
    useEffect(() => {
        let catFavsArray = catData.filter(cat => cat.favorite === true);
        console.log(`cat favorite use effect firing; ${catFavsArray.length}`)
        setCatFavorites([catFavsArray, catFavsArray.length]);
      }, [catData]);

      //initial render - set the filters + checkbox info
      useEffect(()=> {

        const filtered = catData.map(cat => (cat.breed));

        //reduce array to get rid of duplicate breeds
        const catFilterArray = filtered.reduce((accumulator, value) => {
            return accumulator.includes(value) ? accumulator : [...accumulator, value]
        },[]);

        //take new array and add the isChecked variable.
        const catMap = catFilterArray.map((filter, index) => (
            {
                breed: filter,
                isChecked: false,
                id: index
            }
        ))

        setCatFilterData(catMap)
      }, []);

    return (
        <Context.Provider value={{catData, toggle, catFavorites, catFilterData, setCatFilterData}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}