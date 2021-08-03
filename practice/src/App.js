import React,{Component} from "react";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import Iteration from "./Iteration";
import LifeCycle from "./LifeCycle";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {

  getRandomColor(){
    return '#'+ Math.floor(Math.random() * 16777215).toString(16);
  }

  state ={
    color: '#000000'
  }

  handleClick =()=>{
    this.setState({
      color:this.getRandomColor()
    });
  }

  render(){
    return(
      <div>
      
      <ValidationSample />
      <ScrollBox ref={(ref) => this.ScrollBox = ref}/>
      <br />
      <button onClick={()=>{this.ScrollBox.scrollToBottom()}}>맨 밑으로</button>
      <IterationSample/> <br />
      <Iteration />

      <br /> 
      <button onClick={this.handleClick}>랜덤 색상</button>
      <ErrorBoundary>
        <LifeCycle color={this.state.color}>LifeCycle</LifeCycle>
      </ErrorBoundary>
      
      </div>
      
    )
  }
}

export default App;
