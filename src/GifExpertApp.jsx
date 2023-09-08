import React, { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
        console.log('imprimiendo arreglo de categorias ',categories)
        
    }
    
    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }


        </>
    )
}