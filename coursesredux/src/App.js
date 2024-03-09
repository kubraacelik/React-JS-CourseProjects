import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotal } from "./control/cardSlice";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function App() {
  const { cardItems } = useSelector((store) => store.card);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cardItems]);

  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
