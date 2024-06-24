import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCareButton.module.scss";
import CartContext from "../../../store/card-context";

const HeaderCartButton = ({ onShow }) => {

  // bump 애니메이션을 제어하는 상태변수
  const [isBump, setIsBump] = useState(false);

  // 장바구니 배열
  const { cartItems } = useContext(CartContext);

  // 나의 장바구니 수량 렌더링 1번째 방법
  const calcTotalAmount = () => {
    let totalAmount = 0;
    for (const item of cartItems) {
      totalAmount += item.amount;
    }
    return totalAmount;
  };

  // 나의 장바구니 수량 렌더링 2번째 방법
  // const numberOfCart = cartItems.reduce((accum, current) => {
  //   console.log('accum: ', accum);
  //   console.log('current: ', current);
  //   return accum + current.amount;
  // }, 0);


  const { button, icon, badge, bump } = styles;

  useEffect(() => {
    if (cartItems.length === 0) return;

    // console.log('useEffect 실행');
    setIsBump(true);

    // 애니메이션 실행 후 클래스 제거
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300)

    return () => clearTimeout(timer);
 
  }, [cartItems]);

  return (
    <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      {/* // 나의 장바구니 수량 렌더링 1번째 방법 */}
      <span className={badge}>{calcTotalAmount()}</span>
      {/* // 나의 장바구니 수량 렌더링 2번째 방법 */}
      {/* <span className={badge}>{numberOfCart}</span> */}
    </button>
  );
};

export default HeaderCartButton;
