import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();

  // Search işlemi yapmak için state'i parçaladık.
  // Yani { form, course: { data, searchTerm } } aslında state'ti
  const { course } = useSelector(({ form, course: { data, searchTerm } }) => {
    const filteredCourses = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      course: filteredCourses,
    };
  });

  //Ekrana bastırma işlemi yapar
  const renderedCourse = course.map((item) => {
    return (
      <div key={item.id} className="panel">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.cost}</p>
        <button
          className="button is-danger"
          onClick={() => dispatch(removeCourse(item.id))}
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedCourse}</div>;
}

export default CourseList;
