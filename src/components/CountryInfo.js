import React from "react";

const CountryInfo = ({ countryInfo }) => {
  const { name, capital, population, languages, flag } = countryInfo;

  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Languages: {languages.map((lang) => lang.name).join(", ")}</p>
      <img src={flag} alt={`Flag of ${name}`} style={{ width: "100px" }} />
    </div>
  );
};

export default CountryInfo;
