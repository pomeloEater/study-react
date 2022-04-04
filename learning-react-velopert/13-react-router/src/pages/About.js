import React from "react";
// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const About = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  /* 
    쿼리파라미터를 사용할 때의 주의점
    : 쿼리파라미터의 값은 무조건 문자열 타입이다!
  */

  const onIncreaseMode = () => {
    // const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
    /* mode === null로 할 경우 onToggleDetail -> onIncreaseMode 시 NaN 발생 */
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      {/* <p>쿼리스트링: {location.search}</p> */}
      {/* 
        직접 주소창에 localhost:3000/about?detail=true&mode=1 을 입력하면
        ?을 포함하는 쿼리스트링 값이 출력된다.
        useLocation
          - pathname; 현재 주소의 경로 (쿼리스트링 제외)
          - search : 맨 앞의 ? 문자를 포함한 쿼리스트링 값
          - hash : 주소의 # 문자열 뒤의 값(구형 브라우저에서 클라이언트 라우팅을 사용할 떄)
          - state : 페이지로 이동할 떄 임의로 넣을 수 있는 상태 값
          - key : location 객체 고유의 값
      */}
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
