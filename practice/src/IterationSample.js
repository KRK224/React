import React from 'react';

const IterationSample = ()=>{
    const names = ['눈사람', '얼음', '바람', '눈', '추원'];
    const nameList = names.map((item, index)=>{
        return <li key={index}>{item}</li>
    })
    return(
        <ul>
            {nameList}
        </ul>
    )
}

export default IterationSample