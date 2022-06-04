import Filter from "./Filter";

import { useContext } from "react";
import {Context} from "../Context";

export default function Sidebar(props) {
    const {catFilterData} = useContext(Context);

    return (
            <section className="sidebar-style">
            <i className="fas fa-solid fa-arrow-left sidebar-close" onClick={props.showSidebar}></i>
                <Filter 
                    catFilterData={catFilterData}
                />
            </section>
       
    )
}