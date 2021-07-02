import Person from "./Person"

const PersonList = ({ filtered,handleDelete }) => {
  
  return (
    <div>
      {filtered.map((person) => (
        <Person key={person.id} person={person} handleRemove={handleDelete}/>
        
      ))}
    </div>
  );
};

export default PersonList;
