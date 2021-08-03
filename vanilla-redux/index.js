import {createStore} from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () =>({type:TOGGLE_SWITCH});
const increase = (difference) =>({type:INCREASE, difference});
const decrease = () =>({type:DECREASE});

const initState = {
  toggle: false,
  counter: 0,
}

function reducer (state = initState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return({
        ...state,
        toggle: !state.toggle
      });
        // break; return 하면 함수가 종료되서 필요없다.
      case INCREASE:
        console.log(typeof (state.counter + action.difference));
        return({
          ...state,
          counter: state.counter + action.difference
        });
        // break;
      case DECREASE:
        return({
          ...state,
          counter: state.counter-1
        });
      default:
        return state;
  }
}

const store = createStore(reducer);

const render = ()=>{
  const state = store.getState();
  
  if(state.toggle){
    divToggle.classList.add('active');
  } else{
    divToggle.classList.remove('active');
  }
  console.log("state Counter 값: " +state.counter);
  console.log("state Counter 타입:" + typeof state.coutner);
  counter.innerText = state.counter;
};

render();

store.subscribe(render);

divToggle.onclick = ()=>{
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = ()=>{
  store.dispatch(increase(1));
};

btnDecrease.onclick= ()=>{
  store.dispatch(decrease());
};
