import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

function DropDown({
  currencies,
  currency,
  setCurrency,
  favourites,
  handleFavorite,
  title = "",
  fromCurrency,
  toCurrency
}) {
  const isFavorite = (currency) => favourites.includes(currency);

  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* favorites */}
          {favourites?.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}

          {currencies
            ?.filter((c) => !favourites.includes(c))
            .map((current) => {
              return (
                <option className="bg-white" value={current} key={current}>
                  {current}
                </option>
              );
            })}
        </select>
        <button
          onClick={() => handleFavorite(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          {isFavorite(currency) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
}

export default DropDown;
