const Persons = ({ filtered }) => {
  return (
    <ul>
      {filtered.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
