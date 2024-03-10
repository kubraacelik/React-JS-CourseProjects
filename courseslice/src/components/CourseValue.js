import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, course: { data, searchTerm } }) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((acc,item)=>acc+item.cost,0)

    // let cost = 0;

    // for (let item of filteredCourses) {
    //   cost += item.cost;
    // }

    // return cost;

  });

  return <div className="coursePrice">Toplam Tutar : {totalCost}</div>;
}

export default CourseValue;
