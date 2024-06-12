import React from "react";
import "./App.css";
import Expenseltem from "./components/expenses/Expenseltem";
import ExpenseList from "./components/expenses/ExpenseList";
import Greet from "./components/Greet"
import Hello from "./components/Hello"

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

  return (
    <>
      <ExpenseList expenses={expenses} />
      {/* <Greet>
        <ul>
          <li>사과</li>
          <li>딸기</li>
          <li>수박</li>
        </ul>
      </Greet>
      <Greet>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </Greet>
      <Greet>
        <Hello />
      </Greet> */}
    </>
  );
};

export default App;
