import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef is used to store the reference of the button/ 
  const buttonRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()_+~`";

    for (let i = 1; i <= length; i++) {
      let rn = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(rn);
    }
    setPassword(pass);
  }, [length, numAllowed, charactersAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{

    window.navigator.clipboard.writeText(password).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
    buttonRef.current?.select();
    //optional for more optimization(selectionRange is used to select the text in the input field)
    buttonRef.current?.setSelectionRange(0,10)

  },[password])

  useEffect(() => {
    generatePassword();
  }, [numAllowed, charactersAllowed, length, generatePassword]);

  return (
    <>
      <h1 className="text-4xl  p-4 center text-white mt-16 text-center">
        let's Start ! 
      </h1>
      <div className="container w-64 h-64 xl:w-96  text-white overflow-hidden">
        <div className="input">
          <input
            className="bg-white-100 focus:outline-none focus:ring focus:ring-violet-300 text-black  text-md pl-4"
            type="text"
            value={password}
            readOnly
            placeholder="password"
            ref ={buttonRef}

          />

          <button className=" bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... "
          onClick={copyPasswordToClipboard}>
            copy
          </button>
        </div>

        <div className="length mt-8">
          <input 
            className="cursor-pointer"
            type="range"
            min={8}
            max={15}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length"> length:{length}</label>
        </div>
        <div className="num">
          <input
            className="cursor-pointer"
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numbers"> numbers</label>
        </div>
        <div className="character">
          <input
            className="cursor-pointer"
            type="checkbox"
            defaultChecked={charactersAllowed}
            onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="character"> characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
