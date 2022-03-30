// import { Fragment } from "react";
import "./App.css";

// function App() {
//   return (
//     <div>
//       Hello <b>react</b>
//     </div>
//   );
// }

/* Fragment 사용하기 */
// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </Fragment>
//   );
// }

// function App() {
//   return (
//     <>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   );
// }

// function App() {
//   const name = "리액트";
//   return (
//     <>
//       <h1>{name} 안녕!</h1>
//       {/* if 문 대신 조건부 연산자 */}
//       {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}

//       {/* AND 연산자를 사용한 조건부 렌더링 */}
//       {name === "리액트" && <h1>리액트입니다.</h1>}
//     </>
//   );
// }

// function App() {
//   const name = undefined;
//   // return name;

//   /* OR 연산자를 통해 undefined일 때 사용할 값을 지정하는 것으로 오류를 방지할 수 있다. */
//   // return name || "값이 undefined입니다.";

//   /* JSX 내부에서 undefined를 렌더링하는 것은 괜찮다. */
//   return <div>{name}</div>;
//   // return <div>{name || '리액트'}</div>;
// }

/* 인라인 스타일링 */
// function App() {
//   const name = "리액트";
//   const style = {
//     /* 카멜 표기법으로 작성하면 된다 */
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16,
//   };
//   return <div style={style}>{name}</div>;
// }

// function App() {
//   const name = "리액트";
//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         color: "aqua",
//         fontSize: "48px",
//         fontWeight: "bold",
//         padding: 16,
//       }}
//     >
//       {name}
//     </div>
//   );
// }

/* class 명을 표기할 때는 className으로 쓴다 */
// function App() {
//   const name = "리액트";
//   return <div className="react">{name}</div>;
// }

/*
  input, br 등의 태그들은
  HTML에서 닫지 않아도 괜찮았지만
  JSX에서 반드시 닫아주어야 한다
  (Parsing error: Unterminated JSX contents.)
*/
function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다 */
      <input />
    </>
  );
}

export default App;
