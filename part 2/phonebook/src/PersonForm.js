const PersonForm = ({ onSubmit, nameVal, noVal, nameChange, noChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameVal} onChange={nameChange} />
      </div>
      <div>
        number: <input value={noVal} onChange={noChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
