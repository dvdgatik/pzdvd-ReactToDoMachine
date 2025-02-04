import React, {useState} from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    return (
        <input 
            className='TodoSearch'
            value={searchValue}
            placeholder="Cortar Cebolla"
            onChange={e=>{
                setSearchValue(e.target.value)
            }}
        />
    );
}

export { TodoSearch };