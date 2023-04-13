import React from "react";

function CountryInfo({ countryInfo }) {
  const { name, capital, population, languages, flag, region } = countryInfo;
  return (
    <div>
      <h2>{name}</h2>
      <img src={flag} alt={`Flag of ${name}`} />
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Languages: {languages.map((lang) => lang.name).join(", ")}</p>
      <p>Region: {region}</p>
    </div>
  );
}

export default CountryInfo;