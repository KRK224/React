import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import rootReducer from './modules';

const App = ()=>{
  return (
    <div>
      <Counter number={0}></Counter>
      <Todos></Todos>
    </div>
  )
}

export default App;