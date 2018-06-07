import React from 'react';
import {FoodCard} from './FoodCard';
import {FoodDetail} from './FoodDetail';

export const FoodsToday = (props)=>{
    return(
        <div>
           <div>
               <h2>Today's foods cal</h2>
                {props.foods.map((food, index)=>{
                    return(
                        <FoodDetail
                        food={food}
                        key={index}
                        />
                    )
                })}
           </div>
        </div>
    )
}