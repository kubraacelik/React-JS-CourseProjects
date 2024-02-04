import Course from "./Course";

//! Tüm kurslarımın bulunduğu component
function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h1>Kurslarım</h1>
      </div>
      <div className="cardDiv">
        {/* courses içindeki her bir kursu getir */}
        {courses.map((course, index) => {
          // {...course} = course={course} ile aynıdır, Course component'ine gidip {course} yerine {id, content, title, price} olacak
          return (
            <Course key={index} {...course} removeOneCourse={removeCourse} />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
