import { createSlice, nanoid } from "@reduxjs/toolkit";

//name olarak biz isim veriyoruz. Slice'ın adını belirtir.
//state, sayfadaki bilgilerdir. Slice'ın başlangıç durumunu tanımlar.
//reducers,  Reducer fonksiyonlarını tanımlayacağınız yerdir.
const courseSlice = createSlice({
  name: "course",
  initialState: {
    searchTerm: "",
    data: [],
  },
  //addCourse için state'in içindeki data'ya name,description ve cost değerlerini ekledik
  //id ile uğraşmamak için rastgele id ürettik
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
  },
});

export const { addCourse } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
