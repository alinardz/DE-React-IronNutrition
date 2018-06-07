import React from 'react';
import {FoodCard} from './FoodCard';

export const FoodList = (props)=>{
    return(
        <div>
           <h2>Lista de Comidas</h2>
           <div>
                {props.foods.map((food, index)=>{
                    return(
                        <FoodCard
                            food={food}
                            key={index}
                        />
                    )
                })}
           </div>
        </div>
    )
}