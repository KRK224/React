import React from "react";
import MyComponent from "./MyComponent";
import MyComponentClass from "./MyComponentClass";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFunc from "./EventPracticeFunc";


function App() {
  
  return (
    <>
      <MyComponent name ="Chris" favoriteSinger="아이유 입니다.">리액트 </MyComponent>
      <MyComponentClass />
      <Counter/> <br/><br/>
      <Say/>
      <EventPractice />
      <EventPracticeFunc />
    </>
  );
}

export default App;
