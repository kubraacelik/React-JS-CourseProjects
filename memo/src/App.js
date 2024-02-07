import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //number değişince slowFunc çalışsın
  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div className="App">
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Temayı Değiştir
        </button>
        <div style={theme}>{doubleNumber}</div>
      </>
    </div>
  );
}

function slowFunc(num) {
  console.log("Fonksiyon çağırıldı.");
  for (let i = 0; i <= 1000000000; i++) {
    return num * 2;
  }
}

export default App;
