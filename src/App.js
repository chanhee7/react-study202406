import React from "react";
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
      date: new Date(2024, 6 - 1, 14),
    },
    {
      title: "피자",
      price: 12000,
      date: new Date(2024, 4 - 1, 27),
    },
  ];


  // ExpenseForm에게 내려보낼 함수
  const onAddExpense = (userInput) => {
    console.log('app.js가 내려보낸 함수');
    // console.log('userInput: ', userInput);
    expenses.push(userInput);
    console.log(expenses);
  }

  return (
    <>
      <CheckBoxStyle />
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;
