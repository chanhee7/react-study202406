import React from "react";
// import "./CourseList.css";
import CourseItem from "./CourseItem";
import styled from "styled-components";

const CouresUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseList = ({ items, onDelete }) => {
  return (
    <CouresUl>
      {
        // map 은 key 넣기
        items.map((item) => (
          <CourseItem key={item.id} item={item} onDelete={onDelete} />
        ))
      }
    </CouresUl>
  );
};

export default CourseList;
