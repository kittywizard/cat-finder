import CatCard from "../components/CatCard";
import Search from "../components/Search";
import Filter from "../components/Filter";

import { useContext } from "react";
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
        <>
            <Filter />
            <section className="card--container">
                {catCardData}
            </section>
        </>
    )
}