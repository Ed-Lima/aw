import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Text from './pages/Text/Text';


function App() {

  let baseUrl = process.env.PUBLIC_URL;
  
  return (
    <Switch>
        <Route path={`${baseUrl}/`} component={Home} exact />
        <Route path={`${baseUrl}/text`} component={Text} exact />
    </Switch>
  )
}
export default App;
