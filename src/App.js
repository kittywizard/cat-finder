import {React, useState} from "react";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import data from "./data.js";

function App() {

  const [catData, setCatData] = useState(data);


  return (
    <div className="container">
      <Header /> 
      <CatCard 
          data={catData}
          setCatData={setCatData}
      />
    </div>
  );
}

export default App;
