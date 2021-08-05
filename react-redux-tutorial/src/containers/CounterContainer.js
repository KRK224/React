import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({number, increase, decrease})=>{
  return (
  <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
  );
};

const mapStateToProps = state =>{
  return(
    {number: state.counter.number,
  });
};

const mapdispatchToProps = dispatch => ({
  //임시 함수
  increase: ()=>{
    console.log('increase');
  },

  decrease: ()=>{
    console.log('decrease');
  },
});



export default connect(
  mapStateToProps,
  mapdispatchToProps
)(CounterContainer);