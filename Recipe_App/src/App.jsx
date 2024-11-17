import { useState } from "react";
import Mainpage from "./Components/MainPage";
import MealInfo from "./Components/MealInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mainpage />
      <MealInfo />
    </>
  );
}

export default App;
