import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

//name olarak biz isim veriyoruz. Slice'ın adını belirtir.
//state, sayfadaki bilgilerdir. Slice'ın başlangıç durumunu tanımlar.
//reducers,  Reducer fonksiyonlarını tanımlayacağınız yerdir.
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  //payload = item'ın id'sine denk geliyor
  //initialState'in içindeki name'in id'sini aldık
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  //form submit olduktan sonra name, description ve cost değerleri boşalsın
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});

export const { changeName } = formSlice.actions;
export const { changeDescription } = formSlice.actions;
export const { changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
