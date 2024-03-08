import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

//? Kart işlemlerini burada kontrol edeceğiz

// State'i tanımladık
// cardItems:her bir kart, quantity:kaç tane var, total:toplam ücret
const initialState = {
  cardItems: courseItems,
  quantity: 5,
  total: 0,
};

// kontrol edeceğim state ve sonra reducer'ları yazacağız.
// reducerlar kontrol edeceğim state ile ilgili işlemler yapacak
const cardSlice = createSlice({
  name: "card",
  initialState,
});

export default cardSlice.reducer;
