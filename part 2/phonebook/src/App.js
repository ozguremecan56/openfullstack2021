import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNo, setNewNo] = useState("");
  const [filtered, setFiltered] = useState(persons);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fullfilled");
      setPersons(response.data);
    });
  });

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNoChange = (event) => {
    setNewNo(event.target.value);
  };

  const handleSearch = (event) => {
    setFiltered(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(newName + " is already added to phonebook.");
    } else {
      const personObj = {
        name: newName,
        number: newNo,
      };
      setPersons(persons.concat(personObj));
      setFiltered(persons);
    }

    setNewName("");
    setNewNo("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar onChange={handleSearch} />
      <h2>add new entry</h2>
      <PersonForm
        onSubmit={addPerson}
        nameVal={newName}
        noVal={newNo}
        nameChange={handleInputChange}
        noChange={handleNoChange}
      />
      <h2>Numbers</h2>
      <Persons filtered={filtered} />
    </div>
  );
};

export default App;
