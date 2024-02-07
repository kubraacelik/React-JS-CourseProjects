import "./App.css";
import { useState, useCallback } from "react";
import NumberList from "./NumberList";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //number değiştiğinde getItems'ı tetikle
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div className="App">
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Temayı Değiştir
        </button>
        <NumberList getItems={getItems} />
      </div>
    </div>
  );
}

export default App;
