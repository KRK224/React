const loggerMiddleware = store => next => action => {
  console.group(action && action.type);
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); // next 함수를 사용하지 않으면 동작하지 않음.
  console.log("다음 상태", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;