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
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    removeCourse(state, action) {
      const updatedCourses = state.data.filter((item) => {
        return item.id !== action.payload;
      });
      state.data = updatedCourses;
    },
  },
});

export const { addCourse, changeSearchTerm, removeCourse } =
  courseSlice.actions;
export const courseReducer = courseSlice.reducer;
