import React, { useState } from "react";

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const Statistic = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}%</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.stats.total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given.</div>
      </div>
    );
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <Statistic text="good" value={props.stats.good} />
        <Statistic text="neutral" value={props.stats.neutral} />
        <Statistic text="bad" value={props.stats.bad} />
        <Statistic text="total" value={props.stats.total} />
        <Statistic text="avg" value={props.stats.avg} />
        <Statistic text="positive" value={props.stats.positive} />
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const avg = (good * 1 + bad * -1) / total;
  const positive = (good / total) * 100;
  const incGood = () => {
    setGood(good + 1);
  };

  const incNeutral = () => {
    setNeutral(neutral + 1);
  };

  const incBad = () => {
    setBad(bad + 1);
  };

  const stats = { good, neutral, bad, total, avg, positive };

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="Good" handler={incGood} />
      <Button text="Neutral" handler={incNeutral} />
      <Button text="Bad" handler={incBad} />
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
