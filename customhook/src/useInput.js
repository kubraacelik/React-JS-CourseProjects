import { useState } from "react";

function useInput(initialValue) {
  //initialValue=başlangıç değeri
  const [value, setValue] = useState(initialValue);

  //input'un içini sıfırladık
  const reset = () => {
    setValue("");
  };

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
}

export default useInput;
