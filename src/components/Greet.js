import React from "react";
import Card from "./UI/Card";

// 화살표 함수
const Greet = (ccc) => {

  return (
    <Card className='border-green'>
      <h1>
        Greet
        {ccc.children}
      </h1>
    </Card>
  );
};

export default Greet;
