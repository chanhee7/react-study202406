import React from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";

const CourseList = ({ items, onDelete }) => {
  return (
    <ul className="goal-list">
      {
        // map 은 key 넣기
        items.map((item) => (
          <CourseItem key={item.id} item={item} onDelete={onDelete} />
        ))
      }
    </ul>
  );
};

export default CourseList;
