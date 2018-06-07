import React, {Component} from 'react';
import {SearchBar} from './SearchBar';
import {FoodList} from './FoodList';
import {FoodForm} from './FoodForm';
import {Form, Button} from 'semantic-ui-react';

const comidas =[
    {
        "name": "Pizza",
        "calories": 400,
        "image": "https://i.imgur.com/eTmWoAN.png",
        "quantity": 0
      },
      {
        "name": "Salad",
        "calories": 150,
        "image": "https://i.imgur.com/DupGBz5.jpg",
        "quantity": 0
      },
      {
        "name": "Sweet Potato",
        "calories": 120,
        "image": "https://i.imgur.com/hGraGyR.jpg",
        "quantity": 0
      },
      {
        "name": "Gnocchi",
        "calories": 500,
        "image": "https://i.imgur.com/93ekwW0.jpg",
        "quantity": 0
      },
      {
        "name": "Pot Roast",
        "calories": 350,
        "image": "https://i.imgur.com/WCzJDWz.jpg",
        "quantity": 0
      },
      {
        "name": "Lasagna",
        "calories": 750,
        "image": "https://i.imgur.com/ClxOafl.jpg",
        "quantity": 0
      },
      {
        "name": "Hamburger",
        "calories": 400,
        "image": "https://i.imgur.com/LoG39wK.jpg",
        "quantity": 0
      },
      {
        "name": "Pad Thai",
        "calories": 475,
        "image": "https://i.imgur.com/5ktcSzF.jpg",
        "quantity": 0
      },
      {
        "name": "Almonds",
        "calories": 75,
        "image": "https://i.imgur.com/JRp4Ksx.jpg",
        "quantity": 0
      },
      {
        "name": "Bacon",
        "calories": 175,
        "image": "https://i.imgur.com/7GlqDsG.jpg",
        "quantity": 0
      },
      {
        "name": "Hot Dog",
        "calories": 275,
        "image": "https://i.imgur.com/QqVHdRu.jpg",
        "quantity": 0
      },
      {
        "name": "Chocolate Cake",
        "calories": 490,
        "image": "https://i.imgur.com/yrgzA9x.jpg",
        "quantity": 0
      },
      {
        "name": "Wheat Bread",
        "calories": 175,
        "image": "https://i.imgur.com/TsWzMfM.jpg",
        "quantity": 0
      },
      {
        "name": "Orange",
        "calories": 85,
        "image": "https://i.imgur.com/abKGOcv.jpg",
        "quantity": 0
      },
      {
        "name": "Banana",
        "calories": 175,
        "image": "https://i.imgur.com/BMdJhu5.jpg",
        "quantity": 0
      },
      {
        "name": "Yogurt",
        "calories": 125,
        "image": "https://i.imgur.com/URhdrAm.png",
        "quantity": 0
      }
]

class Homepage extends Component{
    state = {
        foods: comidas,
        showFoods: comidas,
        newFood:{
            name: String,
            image: String,
            calories: Number
        },
        show: false
      }

      onChange = (e) =>{
          const value = e.target.value.toLowerCase();
          const newList = this.state.foods.filter(food=>food.name.toLowerCase().includes(value));
          console.log (newList)
          this.setState({showFoods:newList})
      }

      handleShow = ()=>{
        this.setState({show: true});
        console.log("enséñamesta", this.state.show)
      }

      handleHide = ()=>{
        this.setState({show: false});  
        console.log("ya pues, bye", this.state.show)
      }

      addFood = (e) =>{
        const value = e.target.value;
        const field = e.target.name;
        const newFood = this.state.newFood;
        newFood[field] = value;
        this.setState({newFood})
        console.log(this.newFood)
      }

      pushFood = () =>{
          this.state.foods.unshift(this.state.newFood);
          const foods=this.state.foods;
          this.setState({foods});
      }

      createFood = () =>{
          this.addFood;
          this.pushFood();
          this.handleHide();
      }

    render(){
        return(
            <div>
                <button onClick={this.handleShow}>Agrega</button>
                <FoodForm show={this.state.show} create={this.createFood} add={this.addFood}/>

                <SearchBar onChange={this.onChange}/>

                <FoodList foods={this.state.showFoods}/>
            </div>
        )
    }
}

export default Homepage;