import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import personService from "./services/infos.js";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNo, setNewNo] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [addedMessage, setMessage] = useState(null);

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((response) => {
      console.log("promise fullfilled");
      setPersons(response.data);
      setFiltered(response.data);
    });
  }, []);

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
      if (window.confirm(`Change ${newName}'s number with this one?`)) {
        const updatedPerson = {
          name: newName,
          number: newNo,
        };
        personService
          .update(
            persons.find((person) => person.name === newName).id,
            updatedPerson
          )
          .then((response) => {
            console.log(response.data);
            personService.getAll().then((response) => {
              setPersons(response.data);
              setFiltered(response.data);
            });
            setMessage(`${newName}'s number is updated.`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
            setMessage(`${newName} was already deleted from the server.`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      const personObj = {
        name: newName,
        number: newNo,
      };

      personService.create(personObj).then((response) => {
        personService.getAll().then((response) => {
          setPersons(response.data);
          setFiltered(response.data);
        });
        setMessage(`${newName} is added to phonebook.`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);

        console.log(response);
      });
    }

    setNewName("");
    setNewNo("");
  };

  const deletePerson = (id) => {
    if (window.confirm("Do you really want to remove this person?")) {
      personService.remove(id).then((response) => {
        setFiltered(filtered.filter((element) => element.id !== id));
        setPersons(persons.filter((element) => element.id !== id));
        console.log(response);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addedMessage} />
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
      <PersonList filtered={filtered} handleDelete={deletePerson} />
    </div>
  );
};

export default App;
