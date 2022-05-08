import CatCard from "../components/CatCard";
import Search from "../components/Search";

import { useState, useContext } from "react";
import {Context} from "../Context";

export default function Cats(props) {

  const {catData, toggle} = useContext(Context);

  const catCardData = catData.map(cat => {
      return  <CatCard 
              data={cat}
              key={cat.id}
              toggle={toggle}
              />
    });

    return (
        <section className="card--container">
            {catCardData}
        </section>
    )
}