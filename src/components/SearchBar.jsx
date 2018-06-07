import React from 'react';

export const SearchBar = ({onChange})=>{
    return(
        <div>
            <input type="text" name="search" onChange={onChange} placeholder="search"/>
        </div>
    )
}