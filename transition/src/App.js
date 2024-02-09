import "./App.css";
import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState("");
  const [myList, setMyList] = useState([]);

  //isPending transition tamamlanana kadar true döner, tamamlanınca false olur
  //startTransition = transition'u başlatacak fonksiyon
  const [isPending, startTransition] = useTransition();

  //e.target.value = inputun içine girdiğim değer
  const handleChange = (e) => {
    setInput(e.target.value);

    //yazdığım şey önce inputta görünsün daha sonra altta gelsin istiyorum.
    startTransition(() => {});
    const myArray = [];
    for (let i = 0; i < 2000; i++) {
      myArray.push(e.target.value);
    }
    setMyList(myArray);
  };

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleChange} />

      {isPending
        ? "Yükleniyor..."
        : myList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}

export default App;
