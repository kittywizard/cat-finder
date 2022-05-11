import Header from "./components/Header";
import Footer from "./components/Footer";
import Cats from "./pages/Cats";
import Favorite from "./pages/Favorite";

import {Routes, Route} from "react-router-dom";

export default function App2() {
    
    return (
        <div className="root-container">
            <Header />
            <Routes>
                <Route path="/" element={<Cats/>}/>
                <Route path="/favorite" element={<Favorite/>} />
            </Routes>

            <Footer /> 

        </div>
    )
}