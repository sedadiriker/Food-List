import React from 'react'
import { food_list } from '../../helper/data'
import FoodCard from './FoodCard'
import "./FoodList.scss"

const FoodList = () => {
  return (
    <div className="food-lists">
      <div className="search">
        <input type="search" name="search_food" id="search-food" placeholder='Search Food...'/>
      </div>
       <div className='food-list'>
       {
        food_list.map(food => (
            <FoodCard key={food.id} {...food}/>
        ))
      }
       </div>
      
    </div>
  )
}

export default FoodList
