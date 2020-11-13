import React from 'react';
import './App.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Text from './pages/Text/Text';


function App() {
  let match = useRouteMatch();
  console.log(match)

  return (
    <Switch>
        <Route path={`${match.url}/`} component={Home} exact />
        <Route path={`${match.url}text`} component={Text} exact />
    </Switch>
  )
}
export default App;
