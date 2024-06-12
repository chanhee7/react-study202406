import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Greet from "./components/Greet";

function App() {
  // jsx 문법
  // const $h2 = React.createElement('h2', null, 'qqqq');
  const $h2 = <h2>ㄷㄷㄷㄷㄷㄷㄷㄷㄷ</h2>;

  // jsx 규칙
  // 1. return 안에있는 태그는 반드시 하나의 태그로 묶여야 함.
  // 2. 빈 태그는(닫는 태그가 없는)는 반드시 /> 로 마감 - img, br, input 등등
  // 3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  // 4. 의미없는 부모태그는 <React.Fragment> 로 감싸면 됨 == <>로 축약가능
  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  const hello = 'R E A C T';
  return (
    <>
      <Hello />
      <Bye />
      <Greet />
    </>
  );
}

export default App;