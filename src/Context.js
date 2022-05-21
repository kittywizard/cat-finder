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
        console.log(catFavsArray)
        setCatFavorites([catFavsArray, catFavsArray.length]);
      }, [catData]);

    return (
        <Context.Provider value={{catData, toggle, catFavorites}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}