import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            number:0
        };
    }

    render(){
        const {number} = this.state;
        return(
            <>
                <h1>{number}</h1>
                <button
                onClick = {()=>{
                    this.setState(
                        prev => ({number: prev.number +1}),
                        () =>{
                            console.log(`number state 가 ${this.state.number}로 변경되었습니다.`);
                        }
                        

                    );
                }}
                >
                    +1
                </button>
            </>

        )
    }
}

export default Counter;