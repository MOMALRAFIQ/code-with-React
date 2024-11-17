import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Mainpage from "./Components/MainPage.jsx";
import MealInfo from "./Components/MealInfo.jsx";
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:mealid" element={<MealInfo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
