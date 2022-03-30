import React from "react";
import PropTypes from "prop-types";

// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

/* <MyComponent>리액트</MyComponent>처럼 사이에 있는 값을 children이라고 한다 */
// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다.
//       <br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

/* 비구조화 할당 문법을 통해 props 내부 값 추출 */
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       <br />
//       children은 {children}
//       입니다.
//     </div>
//   );
// };
// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       <br />
//       children은 {children}
//       입니다.
//     </div>
//   );
// };

/* isRequired를 사용하여 필수 propTypes 설정 */
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

/* props 기본값 설정 */
MyComponent.defaultProps = {
  name: "기본 이름",
};

/* PropTypes를 통한 props 검증 */
MyComponent.propTypes = {
  name: PropTypes.string,
  /* isRequired를 사용하여 필수 propTypes 설정 */
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
