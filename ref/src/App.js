import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  //altta useEffect her zaman çalışsın dedik ama useRef kullanarak tekrar render edilme ihtiyacı duymuyoruz.
  const renderCount = useRef(0);

  useEffect(() => {
    //useRef, bir referans nesnesi oluşturur. Bu nesne, .current özelliği aracılığıyla erişilen bir değeri saklar.
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="nameDiv">Benim adım {name}</div>
      {/* renderCount.current değeri, component'in kaç kez render edildiğini gösterir ve ekranda görüntülenir. */}
      <div>{renderCount.current} defa render oldu.</div>
    </div>
  );
}

export default App;
