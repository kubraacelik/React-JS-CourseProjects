import "./App.css";
import React, { useReducer } from "react";
import Calculate from "./calculate";

//context oluşturduk
export const NumberContext = React.createContext();

//başlangıç değeri 0 atadık
const initialValue = 0;
//atamış olduğum değere(dispatch) yeni bir type veriyorum. Bu type'a göre action'da tutuluyor.
//İşlemleri yapıp yeni state dönüyorum ve yeni state count'ta tutuluyor.
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function App() {
  //count = reducer fonksiyonundan dönen değer, dispatch = bunu sağlayan fonksiyonun ismi
  //reducer = çalışacak fonksiyon, initialValue = başlangıç değeri
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
