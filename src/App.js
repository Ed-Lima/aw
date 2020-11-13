import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Text from './pages/Text/Text';


function App() {
  return (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/text" component={Text} exact />
    </Switch>
  )
}
export default App;
