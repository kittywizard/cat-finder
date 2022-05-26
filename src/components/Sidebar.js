import Filter from "./Filter";

import { useContext } from "react";
import {Context} from "../Context";

export default function Sidebar() {
    const {catFilterData} = useContext(Context);

    return (
        <section className="sidebar">
             <Filter 
                catFilterData={catFilterData}
            />
        </section>
    )
}