import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const incGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const incNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const incBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={incGood}>good</button>
      <button onClick={incNeutral}>neutral</button>
      <button onClick={incBad}>bad</button>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>total {total}</div>
    </div>
  );
};

export default App;
