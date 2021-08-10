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

export const increaseAsync = createAction(INCREASE_ASYNC, ()=> undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, ()=> undefined);


const initState = 0;

// Counter Reducer_ handleActions
const counter = handleActions({
  [INCREASE]: state=>state+1,
  [DECREASE]: state=>state-1
},
  initState
);

export default counter;
