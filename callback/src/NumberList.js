import { useEffect, useState } from "react";

function NumberList({ getItems }) {
  useEffect(() => {
    //setItems'ı kullanarak items'ın değerlerinin atamasını yapıyoruz
    setItems(getItems());
    console.log("updating Items");
  }, [getItems]);
  const [items, setItems] = useState([]);
  //her bir elemana item dedik ve div içinde bastırdık
  return items.map((item) => <div key={item}>{item}</div>);
}

export default NumberList;
