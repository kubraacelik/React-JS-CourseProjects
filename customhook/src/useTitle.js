import { useEffect } from "react";

function useTitle(num) {
  //Butona her basıp sayı arttığında sitenin adı da değişsin
  useEffect(() => {
    document.title = `Sayı ${num}`;
  }, [num]);
}

export default useTitle;
