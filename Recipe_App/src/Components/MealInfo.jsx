import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MealInfo() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false); 
  const { mealid } = useParams();

  useEffect(() => {
    const fetchMeal = async () => {
      if (mealid) {
        try {
          const Api = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
          );
          const jsonData = await Api.json();

          // Check if data exists
          if (jsonData.meals) {
            setInfo(jsonData.meals[0]);
            setError(false); // Reset error state
          } else {
            setInfo(null);
            setError(true); // Set error if no meal is found
          }
        } catch (err) {
          console.log(err);
          setError(true); // Set error in case of fetch failure
        }
      }
    };

    fetchMeal();
  }, [mealid]); 

  return (
    <>
      {/* Conditional Rendering based on info and error state */}
      {error ? (
        <p>Data not found</p> // Show this if data is not found
      ) : !info ? (
        <p>Loading...</p> // Show a loading message while fetching data
      ) : (
        <div className="mealInfo flex flex-col items-center ">
          <img
            className="img w-[200px] h-[250px] rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.55)] hover:scale-90 relative mt-4 cursor-pointer"
            src={info.strMealThumb}
            alt={info.strMeal}
          />
          <h1 className="relative mt-4 cursor-pointer">Recipe Details</h1>
          <button className="info relative mt-2 cursor-pointer">
            {info.strMeal}
          </button>
          <h3 className="relative text-center cursor-pointer">
            Instructions
          </h3>
          <p className="text-center font-semibold mt-2 cursor-pointer">
            {info.strInstructions}
          </p>
        </div>
      )}
    </>
  );
}

export default MealInfo;
