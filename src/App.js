import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Text from './pages/Text/Text';


function App() {

  let a = process.env.PUBLIC_URL;
  console.log(a)
  return (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/text" component={Text} exact />
    </Switch>
  )
}
export default App;
