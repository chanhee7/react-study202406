import React from "react";
import "./App.css";
import Expenseltem from "./components/expenses/Expenseltem";

const App = () => {
  return (
    <>
      <Expenseltem title={"치킨"} price={18000} date={new Date(2024, 6, 3)} />
      <Expenseltem title="햄버거" price={8000} date={new Date(2024, 5, 14)} />
      <Expenseltem title="피자" price={12000} date={new Date(2024, 4, 27)} />
    </>
  );
};

export default App;
