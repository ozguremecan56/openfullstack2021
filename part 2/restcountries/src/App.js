import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CountryList from "./CountryList"
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

  
    return (
      <div>
        <SearchBar onChange={handleInputChange}/>
        <CountryList countries={countries}/>
      </div>
    );
}
  


export default App;
