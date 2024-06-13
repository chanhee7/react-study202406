import React, { useState } from "react";
import Expenseltem from "./Expenseltem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({ expenses }) => {
  // 선택된 연도로 다시 랜더링하기 위해 연도를 상태값으로 관리
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력
    console.log("ExpenseList: ", filteredYear);
    setFilteredYear(filteredYear);
  };


  // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
  // const convertToComponentArray = () => {
  //   return expenses
  //          .map(ex => <Expenseltem title={ex.title} price={ex.price} date={ex.date} />)
  // };


  return (
    <div className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />

      {expenses
        .filter((ex) => ex.date.getFullYear().toString() === filteredYear)
        .map((ex) => (
          <Expenseltem
            key={Math.random().toString()} // 여러개의 컴포넌트를 구분하기 위한 랜덤값. db에 있는 pk를 씀
            title={ex.title}
            price={ex.price}
            date={ex.date}
          />
        ))}
    </div>
  );
};

export default ExpenseList;
