import "./Course.css";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

//kurs ismi neye eşitse resim olarak onu getir
const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  Kompleweb: Kompleweb,
};

function Course({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
