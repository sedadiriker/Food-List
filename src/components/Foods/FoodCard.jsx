import "./FoodCard.scss"
const FoodCard = ({name,price,description,image}) => {
  return (
    <div className="food-card">
        <div className="image">
        <img src={`./images/${image}`} alt={name} />
        </div>

        <div className="food-info">
            <p className="price">{price}</p>
        </div>
    </div>
  )
}

export default FoodCard
