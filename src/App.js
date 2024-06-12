import React from "react";
import "./App.css";
import Expenseltem from "./components/expenses/Expenseltem";

const App = () => {

  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: '치킨',
      price: 18000,
      date: new Date(2024, 6, 3)
    },
    {
      title: '햄버거',
      price: 8000,
      date: new Date(2024, 5, 14)
    },
    {
      title: '피자',
      price: 12000,
      date: new Date(2024, 4, 27)
    }
  ];

  return (
    <>
      <Expenseltem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} />
      <Expenseltem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} />
      <Expenseltem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} />
    </>
  );
};

export default App;
