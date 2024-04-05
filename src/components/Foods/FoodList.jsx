import React from 'react'
import { food_list } from '../../helper/data'
import FoodCard from './FoodCard'
import "./FoodList.scss"
import { useState } from 'react'

const FoodList = ({selectCategory}) => {
  const [searchTerm, setSearchTerm] = useState("")

 const filteredFoods = food_list.filter(food => ((food.name.toLowerCase()).includes(searchTerm.toLowerCase())) && (selectCategory === "All" || food.category === selectCategory))
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  console.log(searchTerm)
  return (
    <div className="food-lists">
      <div className="search">
        <input onChange={handleSearch} type="search" value={searchTerm} name="search_food" id="search-food" placeholder='Search Food...'/>
      </div>
       <div className='food-list'>
       {
        filteredFoods.map(food => (
            <FoodCard  key={food.id} {...food}/>
        ))
      }
       </div>
      
    </div>
  )
}

export default FoodList
