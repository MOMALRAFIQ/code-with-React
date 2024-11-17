import React from "react";
import { NavLink } from "react-router-dom";

export default function MealCards({ detail }) {
  return (
    <>
      <div className="Meals grid grid-cols-4 gap-8 mt-10">
        {detail && detail.length > 0 && (
          detail.map((curItems) => {
            return (
              <div className=" Meal flex flex-col items-center" key={curItems.idMeal}>
                <img
                  className="img w-[200px] h-[250px] rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.55)] hover:scale-90 relative"
                  src={curItems.strMealThumb}
                  alt={curItems.strMeal}
                />
                <p className="text-center font-semibold mt-2">
                  {curItems.strMeal}
                </p>
                <NavLink to={`/${curItems.idMeal}`}>
                  <button className="recipebutton text-black relative mt-2">
                    Recipe
                  </button>
                </NavLink>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
