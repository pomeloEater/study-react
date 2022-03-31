import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  /* 
   ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다
   렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식으로 코드를 작성할 것을 권고함
  */
  return <div>refsample</div>;
};

export default RefSample;
