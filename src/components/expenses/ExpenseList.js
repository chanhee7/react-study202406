import React, { useState } from "react";
import Expenseltem from "./Expenseltem";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  // 선택된 연도로 다시 랜더링하기 위해 연도를 상태값으로 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력
    setFilteredYear(filteredYear);
  };

  // 연도로 필터링한 배열
  const filteredExpenses = expenses.filter(
    (ex) => ex.date.getFullYear().toString() === filteredYear
  );

  // 지출데이터가 없을 때 보여줄 태그
  let content = <p>지출 항목이 없습니다.</p>;

  // 지출데이터가 있을 때 보여줄 태그
  if (filteredExpenses.length > 0) {
    content = filteredExpenses.map(({ title, price, date }) => (
      <Expenseltem
        key={Math.random().toString()} // 여러개의 컴포넌트를 구분하기 위한 랜덤값. db에 있는 pk를 씀
        title={title}
        price={price}
        date={date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />
      {content}
    </div>
  );
};

export default ExpenseList;
