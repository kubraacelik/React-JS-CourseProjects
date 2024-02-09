import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  //app.js'de açtığım NumberContext'i numberContext adıyla burada kullandım
  const numberContext = useContext(NumberContext);

  return (
    <div>
      <div>Sayı : {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>
        Arttır
      </button>
      <button onClick={() => numberContext.dispatch("decrement")}>Azalt</button>
      <button onClick={() => numberContext.dispatch("reset")}>Sıfırla</button>
    </div>
  );
}

export default Calculate;
