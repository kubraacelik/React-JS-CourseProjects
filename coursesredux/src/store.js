import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./control/cardSlice";

//?Tüm uygulamalarda geçerli state yönetimini yapabileceğimiz store oluşturduk

export const store = configureStore({
  // Tüm işlemleri reducer'de yapacağız
  reducer: {
    // kartları cardReducer ile kontrol edeceğiz
    card: cardReducer,
  },
});
