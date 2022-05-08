import {React, useState, useEffect} from "react";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import Search from "./components/Search";
import Footer from "./components/Footer";
import data from "./MockCatData.json";

function App() {

  const [catData, setCatData] = useState(data);
  const [modalToggle, setToggle] = useState(false);
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


  //map out each cat object to a component
  let catCardData = catData.map(cat => {
    return  <CatCard 
            data={cat}
            key={cat.id}
            toggle={toggle}
            />
  });

  return (

    <div className="root-container">
      <Header 
        modalToggle={modalToggle}
        setToggle={setToggle}
        catCount={catFavorites}
      />
    
      
      <main 
          className="container">
        
        <Search />
        
        {/* display all cat data below */}
        <div className="card--container">
          {catCardData}
        </div>
      </main>
      
      <Footer />
    </div>
    
  );
}

export default App;
