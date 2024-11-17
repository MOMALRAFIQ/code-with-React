import React, { useState } from 'react';
import MealCards from './MealCards';

function MainPage() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(''); 
  const [msg, setMsg] = useState(''); 

  const Api = async () => {
    if (search === "") {
      setMsg("Please enter something");
    } else {
      const getApi = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await getApi.json();
      
      // If no meals are found
      if (!jsonData.meals) {
        setData(null);
        setMsg("Data not found");
      } else {
        setData(jsonData.meals);
        setMsg(""); // Clear the message if meals are found
      }
    }
  };

  const HandleRecipes = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="container flex flex-col items-center justify-start space-y-4 mt-10">
        <div className="inputbox">
          <input
            className="bg-white-100 focus:outline-none focus:ring focus:ring-orange-400 text-black font-md text-md pl-1 rounded-lg"
            type="text"
            placeholder="Enter dishes here"
            onChange={HandleRecipes}
          />
        </div>
        <div className="button w-36 h-12 rounded-full relative hover:shadow-xl">
          <button onClick={Api}>Search</button>
        </div>
        
        {msg && <h4>{msg}</h4>}
        
        <MealCards detail={data} />
      </div>

      <h1 className="heading text-center text-5xl font-bold mt-52 text-emerald-700 font-serif">
        Food Recipe App
      </h1>
    </>
  );
}

export default MainPage;
