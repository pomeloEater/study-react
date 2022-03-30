import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  /* 
    함수가 호출될 때 this는 호출부에 따라 결정되므로,
    클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서
    메서드와 this의 관계가 끊어지게 된다
    -> bind(this) 하지 않은 경우에 this는 undefined를 가리키게 된다
  */

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value,
  //   });
  // }
  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: "",
  //   });
  // }

  /* Property Initializer Syntax를 사용한 메서드 작성 */
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          // onChange={(e) => {
          //   // console.log(e);
          //   // console.log(e.target.value);
          //   this.setState({
          //     message: e.target.value,
          //   });
          // }}
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button
          // onClick={() => {
          //   alert(this.state.message);
          //   this.setState({
          //     message: "",
          //   });
          // }}
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
