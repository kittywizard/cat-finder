import Header from "./components/Header";
import Footer from "./components/Footer";
import Cats from "./pages/Cats";
import Favorite from "./pages/Favorite";
import Sidebar from "./components/Sidebar";

import {Routes, Route} from "react-router-dom";
import { useState } from "react";

export default function App2() {

    const [displaySidebar, setDisplaySidebar] = useState(false);

    function showSidebar() {
        //hide the arrow when not in use?
       setDisplaySidebar(prevState => !prevState)
    }
    
    return (
        <div className="root-container">
            <Header /> 
            {
                displaySidebar ?
                <Sidebar showSidebar={showSidebar}/> :
                <div onClick={showSidebar}>
                    <i className="fas fa-solid fa-arrow-right sidebar-arrow"></i>
                </div>
            }
            <Routes>
                <Route path="/" element={<Cats/>}/>
                <Route path="/favorite" element={<Favorite/>} />
            </Routes>

            <Footer /> 

        </div>
    )
}