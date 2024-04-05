import { useState } from "react";
import "./App.scss"
import FoodList from "./components/Foods/FoodList";
import Header from "./components/Header/Header";
function App() {
  const [selectCategory, setSelectCategory] = useState("All")

 
  return (
    <div className="App">
      <Header setSelectCategory={setSelectCategory}/>
      <FoodList selectCategory={selectCategory}/>
    </div>
  );
}

export default App;
