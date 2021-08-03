import React, {useState} from 'react';

const Say = () =>{
    const [message, setMessage] = useState('뭘봐!');
    const onClickEnter = ()=>setMessage('안녕하세요!');
    const onClickLeave = ()=>setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');

    return (
        <>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h2 style={{color}}>{message}</h2>

            <button style={{color:'red'}} onClick={()=>setColor('red')}>
                빨간색
            </button>

            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>
                파랑색
            </button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>
                초록색
            </button>
        </>
    )
}

export default Say;