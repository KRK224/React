import React, { useState } from 'react';

const EventPracticeFunc = () => {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    
    const handleChange = (e)=>{
        if(e.target.name === 'username'){
            setUsername(e.target.value);
        }
        else if(e.target.name === 'message'){
            setMessage(e.target.value);
        }
    }

    const handleClick = ()=>{
        alert(username + message);
    }

    return (
        <div>
            <h2>이벤트 연습 - 함수형 컴포넌트</h2>
            <input type='text' name='username' onChange={handleChange}></input>
            <input type='text' name='message' onChange={handleChange} />
            <button onClick={handleClick}>확인</button>
        </div>
    );
};


export default EventPracticeFunc;