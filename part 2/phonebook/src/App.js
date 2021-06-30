import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1342345" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNo, setNewNo] = useState("");
  const [filtered, setFiltered] = useState(persons);

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
