import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

//? Kart işlemlerini burada kontrol edeceğiz

// State'i tanımladık
// cardItems:her bir kart ve courseItems karşılık gelecek olan object'lerim, quantity:kaç tane var, total:toplam ücret
const initialState = {
  cardItems: courseItems,
  quantity: 0,
  total: 0,
};

// kontrol edeceğim state'i ve sonra reducer'ları yazacağız.
// reducerlar kontrol edeceğim state ile ilgili işlemler yapacak
//clearCard, temizle butonuna basınca tüm sayfayı temizleyecek(cardList'te dispatch yaparak tanımladık)
// removeItem, sil butonuna basınca gidecek elemanı gösterir. action kullandık çünkü id'is ile silecek
//increase, kurs arttırma işlemi yapar
// decrease, kurs azaltma işlemi yapar
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    //payload = item'ın id'sine denk geliyor
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cardItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

// clearCard'ı ve removeItem'ı dışarıya açmam için dispatch yapmam lazım
export const { clearCard, removeItem, increase, decrease, calculateTotal } =
  cardSlice.actions;

export default cardSlice.reducer;
