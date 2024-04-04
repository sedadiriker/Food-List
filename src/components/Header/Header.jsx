import "./Header.scss"
import {categories} from "../../helper/data"

const Header = () => {
  return (
    <header>
      <h1>Flavors from World Cuisines</h1>
      <label htmlFor="categories"></label>
        <select name="categories" id="categories">
            {
                categories.map((category,index) => (
                    <option key={index} value={category}>{category}</option>
                ))
            }
        </select>
    </header>
  )
}

export default Header
