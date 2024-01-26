import "./App.css";
import { useState } from "react";

function App() {
  const [value, setvalue] = useState(0);

  const handleClick = () => {
    setvalue(value + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div>Kurs Sayısı : {value}</div>
    </div>
  );
}

export default App;
