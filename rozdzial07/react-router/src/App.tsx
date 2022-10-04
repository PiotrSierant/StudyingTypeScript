import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ScreenA } from './ScreenA';
import { ScreenB } from './ScreenB';
import { ScreenC } from './ScreenC';


function App() {
  const renderScreenC = (props: any) => {
    console.log('wlasciwosc props komponentu ScrennC', props);
    return <ScreenC {...props} message='To jest Ekran C' />
  }
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={ScreenA}></Route>
        <Route path="/b" component={ScreenB}></Route>
        <Route path="/c:/:userid" render={renderScreenC}></Route>
      </Switch>
    </div>
  );
}

export default App;
