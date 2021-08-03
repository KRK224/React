import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';


const App = () =>{
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to='/about?detail=false'>소개</Link>
        </li>
        <li>
          <Link to='/about?detail=true'>소개 detail</Link>
        </li>
        <li>
          <Link to ='/profiles'>프로필 모음</Link>
        </li>
        
      </ul>

      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path={["/about", "/info"]} component={About} />
        <Route path='/profiles' component={Profiles} />
        <Route
          render = {(location)=>{
            return (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
            )
          }}
        />
      </Switch>
      

      <hr />
      <Route path='/' component={HistorySample} />
    </div>
  )
}

export default App;
