import React from 'react';

export const FoodDetail = (props)=>{
    return(
        <div style={{marginLeft:"3%", marginBottom:"10px"}}>
            <li>{props.food.name} {props.food.calories}</li>
        </div>
    )
}