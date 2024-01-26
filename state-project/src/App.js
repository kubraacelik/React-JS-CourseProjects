import "./App.css";
import Course from "./Course";
import { useState } from "react";

//random kurs ismi atadık
function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    //eski resimleri götürmemesi için split operatörü kullandık
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
