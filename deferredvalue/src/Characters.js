import { useMemo, useDeferredValue } from "react";

function Characters({ input }) {
  //input'u önceliğe katma, göz ardı et diyoruz
  const deferredValue = useDeferredValue(input);

  const myList = useMemo(() => {
    const myArray = [];
    for (let i = 0; i < 3000; i++) {
      myArray.push(<div key={i}>{input}</div>);
    }
    return myArray;
  }, [deferredValue]);
  return myList;
}

export default Characters;
