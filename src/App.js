import './App.css';
//import { Card, Row, Col, Divider, Input, Button } from "antd";
import allFoods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(allFoods)
  const [searchData, setSearchData] = useState('')
  const someFoods = foods.filter((food) => {
    return food.name.toLowerCase().includes(searchData.toLowerCase())
  })
  const deleteFood = (foodName) => {
    const notDeleted = foods.filter((food) => food.name !== foodName)
    return setFoods(notDeleted)
  }
  return <div className="App">
    <Search {...{ setSearchData, searchData }} />
    <AddFoodForm {...{ setFoods }} />
    {someFoods.map(list => {
      return (
        <FoodBox deleteFood={deleteFood} food={{
          name: list.name,
          calories: list.calories,
          image: list.image,
          servings: list.servings
        }} />

      )
    })}
  </div>



}
export default App;