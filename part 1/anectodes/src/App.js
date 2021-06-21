import React, { useState } from "react";

const App = () => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  const getMax = () => {
    return votes.indexOf(Math.max(...votes));
  };

  const handleClick = () => {
    setSelected(getRandomIntInclusive(0, 6));
  };

  const handleClickVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  return (
    <div>
      <h2>Anectode of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleClick}>next anectode</button>
      <button onClick={handleClickVote}>vote</button>
      <h2>Anectode with most votes</h2>
      <div>{anecdotes[getMax()]}</div>
      <div>has {votes[getMax()]}</div>
    </div>
  );
};

export default App;
