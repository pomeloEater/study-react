import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };

  /*
    useCallback
      렌더링 성능 최적화 상황에 사용
      만들어둔 함수를 재사용할 수 있다!
      (상단의 onChange, onInsert는 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용함)
   */
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성 (기존 값 조회하지 않으므로 빈 배열)
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus(); // useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킴
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
