import React, {useCallback, useState, useRef} from 'react';
import produce from 'immer';

const App = () =>{
  const nextId = useRef(1);
  
  const [form, setForm] = useState({name:'', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback(
    e => {
      const {name, value} = e.target;

      // setForm에 produce함수의 인자가 하나면 반환하는 update 함수를 넣음.
      setForm(
        produce(draft =>draft[name]= value)
      )

      /* produce를 이용한 새 상태 반환
      setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );

      */
        /* immer 함수를 사용하지 않는 불변성 유지
        ...form,
        [name]: value
        */
        
    },
    /* useState의 set함수에 업데이트 함수가 들어가면 필요 없다.
    [form]
    */
   []
  );
  
  const onSubmit = useCallback(
    e =>{
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      }

      setData(

        produce(draft =>draft.array.push(info))

        /* produce를 이용한 새 상태 반환
        produce(data, draft =>{
          draft.array.push(info);
        })
        */


        /*immer 함수를 사용하지 않는 불변성 유지
        {
        ...data,
        array: data.array.concat(info)
        }
        */
      );

      setForm(

        produce(draft =>{
          draft.name ="";
          draft.username = '';
        })

        

        /* produce를 이용한 새 상태 반환
        produce(form, draft =>{
          draft.name ="";
          draft.username = "";
        })
        */


        /*
        {
          name: '',
          username: ''
        }
        */
      );
      nextId.current +=1;
    },
    /*
    [data, form.name, form.username]
    */
    []
  )

  const onRemove = useCallback(
    id =>
    setData(
      produce(data, draft =>{
        draft.array.splice(draft.array.findIndex(info=>info.id===id),1);
      })
      
      /*immer 함수를 사용하지 않는 불변성 유지
      {
      ...data,
      array: data.array.filter(info=>info.id!==id)
      }
      */
    ),
    [data]
  )

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder = "아이디"
          value = {form.username}
          onChange = {onChange}
        />

        <input
          name="name"
          placeholder = '이름'
          value={form.name}
          onChange = {onChange}
        />

        <button type="submit">등록</button>
        </form>
        <div>
          <ul>
            {data.array.map(
              info => (<li key={info.id} onClick={()=>onRemove(info.id)}
            > {info.username} ({info.name}) </li>))}
          </ul>
        </div>
    </div>
  )
};

export default App;
