import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        {/* 
          주의사항!
          onClick={this.scrollBox.scrollToBottom} (X)
          컴포넌트가 렌더링될 때는 this.scrollBox = undefined -> this.scrollBox.scrollToBottom 오류 발생

          onClick={() => this.scrollBox.scrollToBottom()}
          버튼을 누를 때 이미 한 번 렌더링을 해서 this.scrollBox가 설정되어 있음 -> 정상 작동!
        */}
      </div>
    );
  }
}

export default App;
