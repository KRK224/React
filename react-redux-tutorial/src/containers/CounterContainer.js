import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
// import {bindActionCreators} from 'redux';

const CounterContainer = ({number, increase, decrease})=>{
  return (
  <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
  );
};

// const mapStateToProps = state =>{
//   return(
//     {number: state.counter.number,
//   });
// };

// const mapdispatchToProps = dispatch => {
//   return(
//   bindActionCreators (
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   ))
// };



export default connect(
  // mapStateToProps,
  // mapdispatchToProps
  state=>({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },

)(CounterContainer);