import React from 'react'
import { food_list } from '../../helper/data'
import FoodCard from './FoodCard'
import "./FoodList.scss"

const FoodList = () => {
  return (
    <div className="food-list">
      {
        food_list.map(food => (
            <FoodCard key={food.id} {...food}/>
        ))
      }
    </div>
  )
}

export default FoodList
