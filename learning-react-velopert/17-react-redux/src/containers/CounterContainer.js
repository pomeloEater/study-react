// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };
/*
  connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
    - mapStateToProps
      : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
    - mapDispatchToProps
      : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
      store의 내장 함수 dispatch를 파라미터로 받아온다
    => connect 함수 호출하면 다른 함수를 반환
      => 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어진다
 */

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     // console.log('increase');
//     dispatch(increase());
//   },
//   decrease: () => {
//     // console.log('decrease');
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/* 
  // 익명 함수를 사용하면 더욱 간단하게 표현될 때도 있다 
  export default connect(
    state => ({
      number: state.counter.number,
    }),
    dispatch => ({
      increase: () => dispatch(increase()),
      // increase: () => { return dispatch(increase()); } 와 동일
      decrease: () => dispatch(decrease()),
    }),
  )(CounterContainer);

*/

/* bindActionCreators 유틸 함수를 사용 */
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);

/* 
  두 번째 파라미터를 아예 객체 형태로 넣어 주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해 준다
  export default connect(
    state => ({
      number: state.counter.number,
    }),
    {
      increase,
      decrease,
    },
  )(CounterContainer);
*/

/* useSelector로 상태 조회하기 */
// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter.number);
//   /* useDispatch를 사용하여 액션 디스패치하기 */
//   const dispatch = useDispatch();
//   return (
//     <Counter
//       number={number}
//       onIncrease={() => dispatch(increase())}
//       onDecrease={() => dispatch(decrease())}
//     />
//   );
// };

/* useCallback 사용하여 최적화 */
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} inDecrease={onDecrease} />
  );
};

export default CounterContainer;
