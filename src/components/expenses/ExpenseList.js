import React from "react";
import Expenseltem from "./Expenseltem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({ expenses }) => {

  const onFilterChange = (filteredYear) => {

    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력
    console.log('ExpenseList: ', filteredYear);
  }

  return (
    <div className="expenses">

      <ExpenseFilter onChangeFilter={onFilterChange} />

      <Expenseltem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <Expenseltem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <Expenseltem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </div>
  );
};

export default ExpenseList;
