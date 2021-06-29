import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1342345" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNo, setNewNo] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNoChange = (event) => {
    setNewNo(event.target.value);
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
    }

    setNewName("");
    setNewNo("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input />{" "}
      </div>
      <h2>add new entry</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number: <input value={newNo} onChange={handleNoChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
