import React, { Component } from "react";

/* 함수형 컴포넌트 */
// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

/* 클래스형 컴포넌트 */
class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

/*
함수형 컴포넌트
  선언하기 편하다
  메모리 자원을 클래스형 컴포넌트에 비해 적게 사용한다
  배포할 때 파일 크기가 더 작다 (큰 차이는 없다고 한다)
  state와 라이프사이클 API를 사용할 수 없다 -> Hooks 기능이 도입되면서 해결!
  
클래스형 컴포넌트
  render 함수가 반드시 있어야 한다
  state 기능 및 라이프사이클 기능을 사용할 수 있다
  임의 메서드를 정의할 수 있다
*/

export default App;
