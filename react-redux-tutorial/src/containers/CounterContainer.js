import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import {bindActionCreators} from 'redux';

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
  
  increase: ()=>{
    dispatch(increase());
  },

  decrease: ()=>{
    dispatch(decrease());
  },
});



export default connect(
  mapStateToProps,
  mapdispatchToProps
)(CounterContainer);