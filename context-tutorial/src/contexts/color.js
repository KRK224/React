import React, {createContext, useState} from 'react';

const ColorContext = createContext({
    // 초기값으로 객체를 전달하는 것은 동일.
    // 하지만 객체 안에 초기 state와 state를 변경하는 actions attribute를 구분.
    state: {color: 'black', subcolor: 'red'},
    actions: {
      // 
      setColor: ()=>{},
      setSubcolor: ()=>{}
    }
  }
);

const ColorProvider = ({children}) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: {color, subcolor},
    actions: {
      setColor, setSubcolor
    }
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const {Consumer:ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};

export default ColorContext;