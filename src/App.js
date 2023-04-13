import React, { useState } from "react";
import axios from "axios";
import CountryForm from "./components/CountryForm";
import CountryInfo from "./components/CountryInfo";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https:://localhost:5000/api/country/${inputValue}`);
      setCountryInfo(response.data);
      setIsLoading(false);
      setErrorMessage("");
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Unable to get country information. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>Country Info</h1>
      <CountryForm
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}

      {countryInfo && <CountryInfo countryInfo={countryInfo} />}
    </div>
  );
}

export default App;
