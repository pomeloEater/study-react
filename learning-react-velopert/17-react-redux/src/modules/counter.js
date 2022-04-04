/*
  액션 타입 정의
    - 액션 타입 : 대문자
    - 문자열 내용 : '모듈 이름/액션 이름'
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 생성 함수 만들기 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
/* 
  export와 export default의 차이
    - export const increase
    - export const decrease
    - export default counter
  => import counter, { increase, decrease} from './counter';
*/

/* 초기 상태(기본값) */
const initialState = {
  number: 0,
};

/* 리듀서 함수 */
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
