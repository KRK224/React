import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase= createAction(INCREASE);
export const decrease = createAction(DECREASE);


/* 1. Redux-Thunk code 주석 처리
// 1초 뒤에 increase 혹은 decrease 함수를 디스패치 함
export const increaseAsync = ()=>dispatch =>{
  setTimeout(()=>{
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync =()=>dispatch=>{
  setTimeout(()=>{
    dispatch(decrease());
  }, 1000);
}; */

// 2. redux-saga 코드 시작

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// ()=>undefined를 두 번째 파라미터로 넣어 줍니다.

export const increaseAsync = createAction(INCREASE_ASYNC, ()=> undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, ()=> undefined);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다
  yield put(increase()); // put(action) => 특정 액션을 디스패치 
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

// counterSaga는 rootSaga에서 관리해야할 기능적 Saga중 하나.
export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 처리
  // Increase/Decrease_Async는 나중에 CounterContainer에서 액션으로 받는다.
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // takeEvery(action, 동작할 Saga) => action이 들어오면 saga가 동작하도록 지정.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);

}

const initState = 0;

// Counter Reducer_ handleActions
const counter = handleActions({
  [INCREASE]: state=>state+1,
  [DECREASE]: state=>state-1
},
  initState
);

export default counter;
