import {React, useState} from "react";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import Search from "./components/Search";
import data from "./data.js";

function App() {

  const [catData, setCatData] = useState(data);

  let catCardData = catData.map(cat => {
    return  <CatCard 
            data={cat}
            key={cat.id}
            setCatData={setCatData}
            />
  });

  return (
    <div className="container">
      <Header />
      <Search />
      <main className="card--container">

        {catCardData}
      </main>
    </div>
  );
}

export default App;
