import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function CourseItem({ id, title, price, img, quantity }) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button>
            <FaChevronUp />
          </button>
          <p>{quantity}</p>
          <button>
            <FaChevronDown />
          </button>
        </div>
      </div>
      <button>SİL</button>
    </div>
  );
}

export default CourseItem;
