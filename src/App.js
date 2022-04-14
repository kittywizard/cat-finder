import {React, useState} from "react";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import Search from "./components/Search";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import data from "./MockCatData.json";

function App() {

  const [catData, setCatData] = useState(data);
  const [modalToggle, setToggle] = useState(false);

  //toggles the heart on each individual cat
  function toggle(id) {
    setCatData(prevState => {
        let updatedCatArray = prevState.map(cat => {
                return id === cat.id ? {...cat, favorite: !cat.favorite} : cat
            })
            return updatedCatArray;
    })
}

  //used in Nav and Modal to turn the favorites display on and off
  function modalDisplay() {
    setToggle(prevState => !prevState)
  }

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
        modalDisplay={modalDisplay}
        modalToggle={modalToggle}
        setToggle={setToggle}
      />
      
      <div className="overlay">
        {/* only display modal if the toggle state is true */}
        {modalToggle && 
          <Modal 
            data={catData}
            modalDisplay={modalDisplay}
            modalToggle={modalToggle}
            setToggle={setToggle}
          /> }
      </div>
      
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
