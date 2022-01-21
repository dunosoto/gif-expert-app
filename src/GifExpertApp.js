import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch']);

  // const handleAdd = () => {
  //   setCategories([...categories, 'daniel'])
  // }


  return (
    <>
    <h2> GifExpertApp </h2>
    <CategoryAdd setCategories={ setCategories } />
    <hr />
    <ol>
      {
        categories.map(category => (
          <GifGrid
            key={ category } 
            category={category}/>
        ))
      }
    </ol>

    </>
  );

}

export default GifExpertApp;