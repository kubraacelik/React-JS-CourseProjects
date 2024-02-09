import { useState } from "react";

function useCounter() {
  const [num, setNum] = useState(0);

  //prevNum = şimdiki değer anlamına gelir
  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  };

  const reset = () => {
    setNum(0);
  };

  return [num, increment, decrement, reset];
}

export default useCounter;
