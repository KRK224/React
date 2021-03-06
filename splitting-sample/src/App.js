import React, {useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
// build시 하나의 main 파일에 병합됨.
// import notify from './notify';

// React 내장함수 lazy 사용
// const SplitMe = React.lazy(()=>import('./SplitMe'));

import loadable from '@loadable/component';
const SplitMe = loadable(()=>import('./SplitMe'), {
    fallback: <div>loading...</div>
});

// shift + alt + a : 코드블록 주석처리

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    // import() 함수 형태로 사용하면, 파일을 따로 분리시켜서 저장.
    // import("./notify").then((result) => result.default());

    setVisible(true);
  };

  const onMouseOver = ()=>{
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        {/* <Suspense fallback={<div>loading...</div>}> */}
        {visible && <SplitMe />}
        {/* </Suspense> */}
      </header>
    </div>
  );
}

// class 형 component;
/* 
class App extends Component {
  state={
    SplitMe: null
  };

  handleClick = async() =>{
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default
    });
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    )
  }
} */



export default App;
