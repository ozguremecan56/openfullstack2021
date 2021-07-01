import React, { useState } from "react";

const Country = ({ country }) => {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setFlag(!flag);
  };

  if (!flag) {
    return (
      <li key={country.name}>
        {country.name}
        <button onClick={handleClick}>show</button>
      </li>
    );
  } else {
    return (
      <li key={country.name}>
        <h2>{country.name}</h2>
        <h2>Languages</h2>
        <ul>
          {country.languages.map((lang) => (
            <li>{lang.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt="flag" width="200" height="300" />
        <button onClick={handleClick}>hide</button>
      </li>
    );
  }
};

export default Country;
