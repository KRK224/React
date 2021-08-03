import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state ={
        error:false
    };

    componentDidCatch(error2, info){
        this.setState({error: true});
        console.log({error2,info})
    };

    render(){
        if (this.state.error) return <div>에러가 발생했습니다!</div>;
        return this.props.children;
    }

}

export default ErrorBoundary;