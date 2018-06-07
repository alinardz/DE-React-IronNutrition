import React from 'react';
import {Form, Button} from 'semantic-ui-react';

export const FoodForm = (props)=>{
    return(
        <Form onSubmit={this.addFood} style={{display: props.show? 'block': 'none'}}>
            <Form.Field>
                <label>Food Name</label>
                <input type="text" name="name" id="" placeholder='food name' onChange={props.add}/>
            </Form.Field>

            <Form.Field>
                <label>Link to food picture</label>
                <input type="text" name="image" id="" placeholder='image' onChange={props.add}/>
            </Form.Field>

            <Form.Field>
                <label>Calories</label>
                <input type="number" name="calories" id="" placeholder='calories' onChange={props.add}/>
            </Form.Field>

            <Form.Group widths='equal'>
                <Button inverted color='blue' htmlType="submit" onClick={props.create}>Agregar</Button>
            </Form.Group>
        </Form>
    )
}