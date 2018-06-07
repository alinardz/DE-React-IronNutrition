import React from 'react';
import {Card, Image} from 'semantic-ui-react';

export const FoodCard = (props)=>{
    return(
        <div style={{marginLeft:"3%", marginBottom:"10px"}}>
            <Card fluid>
                <Card.Content>
                <Image floated='left' size='small' src={props.food.image}/>
                <Card.Header>{props.food.name}</Card.Header>
                <Card.Meta>{props.food.calories}</Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )
}