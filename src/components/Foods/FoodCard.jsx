import "./FoodCard.scss";
import { useState } from "react";

const FoodCard = ({ name, price, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="food-card">
      <div className="image">
        <img src={`./images/${image}`} alt={name} />
      </div>

      <div className="food-info">
        <p className="name">{name}</p>
        <p className="price">{price} $</p>
        <p className="description" onClick={toggleDescription}>
          {isExpanded ? description : `${description.substring(0, 50)}...`}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
