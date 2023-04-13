import React from "react";

function CountryForm({ inputValue, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="countryInput">Enter a country:</label>
      <input
        id="countryInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CountryForm;
