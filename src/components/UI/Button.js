import React from "react";
// import './Button.css';

import styled from "styled-components";

/*
& = .fruit

.fruit {

  &:hover {
  }
  & > .apple {
  }

}

*/

// 스타일 컴포넌트 (버튼의 클래스 이름이 안겹치게 하기 위함)
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

   &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

}

`;

// const Button = ({ type, onClick, children }) => {
//   return (
//     <button type={type} className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// };

export default Button;
