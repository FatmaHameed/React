import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div className="counter">
      <Count count={count} />
      <p>{feedback}</p>
      <Button setCount={setCount} count={count} />
    </div>
  );
};

const Count = (props) => {
  const { count } = props;
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

const Button = ({ setCount, count }) => {
  return <button onClick={() => setCount(count + 1)}> Add 1!</button>;
};

export default Counter;