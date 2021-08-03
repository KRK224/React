import React, {useCallback, useMemo, useRef, useState} from 'react'


const getAverage = numbers=>{

    console.log('평균값을 계산중...')
    if (numbers.length ===0) return 0;

    const sum = numbers.reduce((a,b)=> a+b);
    const avg = sum/numbers.length;

    return avg;
}

const Average = () =>{
    const [list, setList] = useState([]);
    const [num, setNum] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback( e => {
        console.log('onChange 함수 생성');
        setNum(e.target.value);
    }, []);

    const onInsert = useCallback( e =>{
        
        console.log('onInsert 함수 생성');
        const number = parseInt(num);
        const nextList = [...list, number];
        setList(nextList);
        setNum('');
        inputEl.current.focus();
    },[num, list]);

    const avg = useMemo(()=>getAverage(list),[list]);

    return(
        <div>
            <input onChange ={onChange} onKeyPress={(e)=>{if(e.key==='Enter') onInsert()}} value={num} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            
            <ul>
                {
                list.map((items, index) => {
                    return <li key={index}>{items}</li>
                })
                }
            </ul>

            <p>평균값: <b>{avg}</b></p>
        </div>
    )

}


export default Average;