import React from 'react';
import {FoodCard} from './FoodCard';

export const FoodList = (props)=>{
    return(
        <div>
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