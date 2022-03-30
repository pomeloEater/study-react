import React, { Component } from "react";

class Counter extends Component {
  /* 생성자를 통해 state 초기값 설정하기 */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  /* 생성자를 선언하지 않고 state 초기값 설정하기 */
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          /* onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정 */
          onClick={() => {
            /* this.setState를 사용하여 state에 새로운 값을 넣을 수 있다. */
            // this.setState({ number: number + 1 });
            /* 이런 식으로 함수를 한 번 더 쓴다고 해서 2가 증가하지는 않는다. */
            // this.setState({ number: this.state.number + 1 });

            /* 기존 상태인 prevState를 통해서 값 증가시키기 */
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            /* this.setStae가 끝난 후 특정 작업 실행하기 */
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
