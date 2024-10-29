import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(0);
  let [animate, setAnimate] = useState(false);

  let Increment = () => {
    if (counter < 10) {
      counter = counter + 1;
      setCounter(counter);
    }
  };
  let Decrement = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };
  let Reset = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="container">
        <h1> counter</h1>
        <h2 className={`pop-up ${counter > 0 ? 'show' : ''}`}>let's count {counter}</h2>
        <button
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-900 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={Increment}
        >
          Increase
        </button>
        <button
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-900 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={Decrement}
        >
          Decrease
        </button>

        <button
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-900 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-600/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={Reset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default App;

