import {React, useState} from "react";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import Search from "./components/Search";
import data from "./data.js";

function App() {

  const [catData, setCatData] = useState(data);

  function toggle(id) {

    setCatData(prevState => {
        let updatedCatArray = prevState.map(cat => {
                return id === cat.id ? {...cat, favorite: !cat.favorite} : cat
            })
            return updatedCatArray;
    })
}

  let catCardData = catData.map(cat => {
    return  <CatCard 
            data={cat}
            key={cat.id}
            toggle={toggle}
            />
  });

  return (
    <div className="root-container">
      <Header />
      <main className="container">
        <Search />
        <div className="card--container">
          {catCardData}
        </div>
      </main>
     
    </div>
  );
}

export default App;
