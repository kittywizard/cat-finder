import {React, useState} from "react";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import Search from "./components/Search";
import Modal from "./components/Modal";
import data from "./data.js";

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

  //style for the stupid modal position:absolute
  //fix later
  const styles = {
    marginTop: !modalToggle ? "6em" : 0
  }

  return (
    <div className="root-container">
      <Header 
        modalDisplay={modalDisplay}
        modalToggle={modalToggle}
        setToggle={setToggle}
      />
      <main 
          className="container"
          style={styles}>

        {/* only display modal if the toggle state is true */}
        {modalToggle && 
        <Modal 
          data={catData}
          modalDisplay={modalDisplay}
          modalToggle={modalToggle}
          setToggle={setToggle}
        /> }
        
        <Search />
        
        {/* display all cat data below */}
        <div className="card--container">
          {catCardData}
        </div>
      </main>
     
    </div>
  );
}

export default App;
