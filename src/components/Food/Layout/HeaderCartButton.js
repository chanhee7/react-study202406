import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCareButton.module.scss";
import CartContext from "../../../store/card-context";

const HeaderCartButton = ({ onShow }) => {

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


  const { button, icon, badge } = styles;

  return (
    <button className={button} onClick={onShow}>
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
