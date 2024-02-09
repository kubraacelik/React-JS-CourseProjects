import useCounter from "./useCounter";

function Counter() {
  const [num, increment, decrement, reset] = useCounter();

  return (
    <div>
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
      <button onClick={reset}>Resetle</button>
      <div className="valueDiv">{num}</div>
    </div>
  );
}

export default Counter;
