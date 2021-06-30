import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/name/" + searchTerm)
      .then((response) => {
        setCountries(response.data);
      });
  });

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (countries.length === 0) {
    return (
      <div>
        <div>
          find countries <input onChange={handleInputChange} />
        </div>
        <div>Type a country name to search.</div>
      </div>
    );
  } else if (countries.length > 10) {
    return (
      <div>
        <div>
          find countries <input onChange={handleInputChange} />
          <div>Too many matches. Specify another filter.</div>
        </div>
      </div>
    );
  } else if (countries.length > 1 && countries.length < 10) {
  }
}

export default App;
