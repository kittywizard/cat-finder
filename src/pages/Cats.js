import { useState } from "react";

import CatCard from "../components/CatCard";
import Search from "../components/Search";
import Filter from "../components/Filter";

import { useContext } from "react";
import {Context} from "../Context";

export default function Cats() {

  const {catData, toggle} = useContext(Context);

  const [catFilters, setCatFilters] = useState({
        isChecked: false
  })

  const catCardData = catData.map(cat => {
      return  <CatCard 
              data={cat}
              key={cat.id}
              toggle={toggle}
              />
    });

    return (
        <>
            <Filter 
                catData={catData}
                catFilters={catFilters}
            />
            <section className="card--container">
                {catCardData}
            </section>
        </>
    )
}