import React, {Component} from 'react';
import './ValidationSample.css';


class ValidationSample extends Component{
    constructor(props){
        super(props);

        this.state = {
            password: '',
            clicked: false,
            validated: false
        }
    }

    handleChange = (e) =>{
        this.setState({password:e.target.value})
    }

    handleButtonClicked = (e)=>{
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });

        this.input.focus();

    }

    render(){
        return(
            <div>
                <input
                    ref={(ref)=>this.input = ref}
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    className={(this.state.clicked?(this.state.validated? 'success' : 'failure'):'')} 
                />
                <button onClick = {this.handleButtonClicked} >검증하기</button>
            </div>
        )
        
    }
}

export default ValidationSample