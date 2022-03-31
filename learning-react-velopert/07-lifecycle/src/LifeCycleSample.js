import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  /* 
    MOUNT
      constructor -> getDerivedStateFromProps -> render -> componentDidMount
    UPDATE
      getDerivedStateFromProps -> shouldComponentUpdate
        (true) -> render -> getSnapshotBeforeUpdate -> componentDidUpdate 
               -> constructor -> getDerivedStateFromProps -> render -> componentWillUnmount -> componentDidMount
    UNMOUNT
      componentWillUnmount

  */

  /* 생성자 */
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  /* 마운트 과정, 업데이트 시작 전 호출 */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  /* 컴포넌트가 웹 브라우저상에 나타난 후 */
  componentDidMount() {
    console.log("componentDidMount");
  }

  /* 컴포넌트가 리렌더링을 해야 할지 말지 결정 */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다
    return nextState.number % 10 !== 4;
  }

  /* 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출 */
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  /* 컴포넌트의 업데이트 작업이 끝난 후 호출 */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value} {/* ERROR 발생! */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
