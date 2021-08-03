import React, {useState} from 'react';

const Iteration=()=>{
    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ])

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) =>setInputText(e.target.value);
    const onClick = ()=>{
        setNames(
            [...names,
                {id: nextId,
                text:inputText}
            ]
        );
        setNextId(nextId+1);
        setInputText('');
    }

    const onRemove = id =>{
        const nextNames= names.filter(name=>name.id !==id);
        setNames(nextNames);
    }

    const nameList = names.map((name)=>{
        return <li key={name.id} onDoubleClick={()=>{onRemove(name.id)}}>{name.text}</li>
    })
    
    return(
        <div>
            <input type="text" onChange={onChange} value={inputText} />
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </div>
        
    )
}

export default Iteration