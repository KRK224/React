import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';


const App = ()=>{
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr />
      <Todos></Todos>
    </div>
  )
}

export default App;