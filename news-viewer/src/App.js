import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './Components/NewsList'
import Categories from './Components/Categories';
import NewsPage from './pages/NewsPage';
import {Route} from 'react-router-dom';

const App = () => {

  /*  useState로 만든 Category 기능
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category =>
    setCategory(category), []);
  */

  return (
    /*
      상태관리로 만든 News Category
    <>
    
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category} />
    </>

    */

    <Route path="/:category?" component={NewsPage} />
    
    

  );
};

export default App;
