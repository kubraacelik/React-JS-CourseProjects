import "./App.css";
import { useState } from "react";
import Characters from "./Characters";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleChange} />
      <Characters input={input} />
    </div>
  );
}

export default App;
