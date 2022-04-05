/*
  const loggerMiddleware = function loggerMiddleware(store) { // redux store instance
    return function(next) {
      // next(action) 호츨 시 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고,
      // 만약 그 다음 미들웨어가 없으면 리듀서에게 액션을 넘겨준다
      // spring interceptor (handlerInterceptor 생각하면 되는 걸까?)
      return function(action) {
        // 미들웨어 기본 구조
      }
    }
  }
*/
const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조
  console.group(action && action.type); // 액션 타입으로 log를 그룹화함
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
