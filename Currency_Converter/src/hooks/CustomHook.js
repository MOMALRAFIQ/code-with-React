import { useEffect, useState } from "react";


function UseCurrencyInfo(currency) {
  const [data, setData] = useState({ rates: {} });

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [currency]);

  return data.rates;
}

export default UseCurrencyInfo;
