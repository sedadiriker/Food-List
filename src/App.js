import "./App.scss"
import FoodList from "./components/Foods/FoodList";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <FoodList/>
    </div>
  );
}

export default App;
