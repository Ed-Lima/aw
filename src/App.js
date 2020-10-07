import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  )
}
export default App;
