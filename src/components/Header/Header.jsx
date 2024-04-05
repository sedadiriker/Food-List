import "./Header.scss"
import {categories} from "../../helper/data"

const Header = ({setSelectCategory}) => {
  const selectedCategory = (e) => {
    setSelectCategory(e.target.value)
  }
  return (
    <header>
      <h1>Flavors from World Cuisines</h1>
      <label htmlFor="categories"></label>
        <select onChange={selectedCategory} name="categories" id="categories" defaultValue="">
        <option className="category" value="" disabled>Categories</option>

            {
                categories.map((category,index) => (
                    <option className="category" key={index} value={category}>{category}</option>
                ))
            }
        </select>
    </header>
  )
}

export default Header
