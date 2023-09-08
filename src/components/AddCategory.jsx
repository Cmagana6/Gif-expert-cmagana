import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitEnter = (event) => {
        event.preventDefault();
        const newInputValue= inputValue.trim()
        if(newInputValue.length <=1) return;
        // setCategories((categories) => [inputValue,...categories])
        onNewCategory(newInputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmitEnter}>
            <input type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={onInputChanged} />
        </form>
    )
}