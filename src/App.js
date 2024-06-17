import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

// 기본 더미 데이터
const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기'
  },
  {
    id: 'g2',
    text: 'UI/UX 프로그래밍 고수되기'
  },
];

const App = () => {

  const [goals, setGoals] = useState(DUMMY_DATA);

  // CourseInput 에게 전달할 함수
  const addGoalHandler = (goalObject) => {
    setGoals([...goals, goalObject]);
  };

  // CourseItem에게 전달할 함수
  const deleteGoalHandler = (id) => {

    // goals.splice(goals.findIndex(g => g.id === id), 1);

    // filter - 조건에 안맞는 거 고름
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList items={goals} onDelete={deleteGoalHandler} />
      </section>
    </div>
  );
};

export default App;


// React Fragment
const foo = () => {

  const arr = [1,2,3,4,5,6,700000000];

  // 렌더링이 된 요소
  const $ul = document.querySelector('ul.abc');

  // 중간 가상 DOM 생성
  const $div = document.createDocumentFragment();

  arr.forEach(n => {
    // 아직 렌더링이 되지 않은 요소 : virtual DOM
    const $li = document.createElement('li');
    $li.textContent = n;
    // 렌더링된 곳에 렌더링되지않은 요소를 추가 : 성능상 좋지 않다.
    $div.appendChild($li);
  });

  $ul.appendChild($div);
};