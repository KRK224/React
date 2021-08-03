import React, {Component} from 'react';

class EventPractice extends Component{
    constructor(props){
        super(props)
    
        this.state = {
            message: '',
            username: ''
        }
    }

    handleChange = (e) =>{
        this.setState(
            {[e.target.name]: e.target.value}
        )
        
    }
    handleClick = (e)=>{
        alert(this.state.username + "가 입력한 내용: " + this.state.message);
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="write whatever you want"
                    onChange={this.handleChange}
                />

                <input 
                    type="text"
                    name="username"
                    placeholder="Write your name"
                    onChange ={this.handleChange}
                />
                <button onClick={this.handleClick} >확인</button>
                
            </div>
        )
    }
}

export default EventPractice;