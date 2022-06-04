import Header from "./components/Header";
import Footer from "./components/Footer";
import Cats from "./pages/Cats";
import Favorite from "./pages/Favorite";
import Sidebar from "./components/Sidebar";

import {Routes, Route} from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";


export default function App() {

    const [displaySidebar, setDisplaySidebar] = useState(false);

    function showSidebar() {

       setDisplaySidebar(prevState => !prevState)
    }
    
    return (
        <div className="root-container">
            <Header /> 
            {!displaySidebar && 
            <div onClick={showSidebar}>
                    <i className="fas fa-solid fa-arrow-right sidebar-arrow"></i>
            </div>
            }
        
         <CSSTransition in={displaySidebar} timeout={200} classNames="sidebar" unmountOnExit>
            <Sidebar 
                showSidebar={showSidebar}
                displaySidebar={displaySidebar}
                />
        </CSSTransition>
        
            <Routes>
                <Route path="/" element={<Cats/>}/>
                <Route path="/favorite" element={<Favorite/>} />
            </Routes>

            <Footer /> 

        </div>
    )
}