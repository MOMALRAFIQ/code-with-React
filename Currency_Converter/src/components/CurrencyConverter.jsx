import React from "react"
import { useId } from "react"

function CurrencyConverter({
  label,
  Amount,
  OnAmountChange,
  OnCurrencyChange,
  CurrencyOptions =[],
  SelectCurrency ="USD",
  AmountDisable = false,
  CurrencyDisable = false,
  className = "",
}) {

  const amountInputID = useId()
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`} >
          <div className="w-1/2">
              <label htmlFor={amountInputID} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputID}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={AmountDisable}
                  value ={Amount}
                  onChange ={(e) =>OnAmountChange && OnAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  disabled={CurrencyDisable}
                  value={SelectCurrency}
                  onChange={(e)=>OnCurrencyChange && OnCurrencyChange(e.target.value)}
                  
              >
                  
                      {CurrencyOptions.map((Currency)=>(
                        <option  key ={Currency}value={Currency}>
                        {Currency}
                    </option>

                      ))}
              
              </select>
          </div>
      </div>
  );
}

export default CurrencyConverter ;