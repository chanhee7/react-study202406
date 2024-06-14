import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";

const App = () => {
  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: "치킨",
      price: 18000,
      date: new Date(2024, 5 - 1, 3),
    },
    {
      title: "햄버거",
      price: 8000,
      date: new Date(2021, 6 - 1, 14),
    },
    {
      title: "피자",
      price: 12000,
      date: new Date(2023, 4 - 1, 27),
    },
    {
      title: "돈까스",
      price: 11000,
      date: new Date(2022, 7 - 1, 10)
    },
    {
      title: "닭강정",
      price: 6000,
      date: new Date(2023, 9 - 1, 20)
    }
  ];

  // 배열을 상태변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  // ExpenseForm에게 내려보낼 함수
  const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
  
  return (
    <>
      <CheckBoxStyle />
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenseList} />
    </>
  );
};

export default App;
