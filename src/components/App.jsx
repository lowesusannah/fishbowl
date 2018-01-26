import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import ChooseFish from './ChooseFish';
import Bettie from './Bettie';
import Star from './Star';
import Moment from 'moment';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/choosefish' component={ChooseFish} />
        <Route path='/bettie' component={Bettie} />
        <Route path='/star' component={Star} />
      </Switch>
    </div>
  );
}

export default App;
