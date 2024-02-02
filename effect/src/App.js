import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);

  useEffect(() => {
    console.log("Her zaman çalışır.");
  });

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır, daha da çalışmaz");
  }, []);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve Can değerinde bir değişiklik olduğunda çalışır."
    );
  }, [can]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve Tuba değerinde bir değişiklik olduğunda çalışır."
    );
  }, [tuba]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır, Can ve Tuba değerinde bir değişiklik olduğunda çalışır."
    );
  }, [can, tuba]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setCan(can + 1)}>Can++</button>
        <div className="desc">Can : {can} </div>
      </div>
      <div className="secondDiv">
        <button onClick={() => setTuba(tuba + 1)}>Tuba++</button>
        <div className="desc">Tuba : {tuba} </div>
      </div>
    </div>
  );
}

export default App;
