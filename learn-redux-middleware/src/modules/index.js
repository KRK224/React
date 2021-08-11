import counter, {counterSaga} from "./counter";
import { combineReducers } from 'redux';
import sample from "./sample";
import {all} from 'redux-saga/effects';



const rootReducer = combineReducers({
  counter,
  sample
});

export function* rootSaga() {
  // all함수를 사용해서 제너레이터 함수를 배열의 형태로 인자로 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고, 전부 resolve될때까지 기다린다. Promise.all과 비슷하다고 보면된다.
  yield all([counterSaga()]);
}

export default rootReducer;