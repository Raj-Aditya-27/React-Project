import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import { HiArrowsRightLeft } from "react-icons/hi2";

const CurrencyConverter = () => {
  // const currencies = https://api.frankfurter.app/currencies;
  // const conversion = https://api.frankfurter.app/latest?amount=1&from=INR&to=USD;

  const [currencies, setCurrencies] = useState();
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [converting, setConverting] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
  );

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.log("error");
    }
  };

  const convertCurrency = async () => {
    if (!amount) return;
    if(toCurrency===fromCurrency){
        setConvertedAmount(amount + " " + toCurrency);
        return;
    }
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.log("error");
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorite];
    if (favorite.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((c) => c != currency);
    } else {
      updatedFavorites.push(currency);
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorite(updatedFavorites);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Currency Converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <DropDown
          favourites={favorite}
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          handleFavorite={handleFavorite}
        />
        <div className="flex justify-center -mb-5 sm:mb-0">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <HiArrowsRightLeft className="text-xl text-gray-700" />
          </button>
        </div>
        <DropDown
          favourites={favorite}
          currencies={currencies}
          title="To:"
          currency={toCurrency}
          setCurrency={setToCurrency}
          handleFavorite={handleFavorite}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="font-medium text-sm block text-gray-700"
        >
          Amount:
        </label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-2 mt-1"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            converting ? "animate-pulse" : ""
          }`}
        >
          Convert
        </button>
      </div>
      {convertedAmount && (
        <div className="mt-4 text-lg font-medium text-right text-green-600">
          converted amount: {convertedAmount}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
