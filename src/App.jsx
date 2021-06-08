import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Screen from './components/Screen';
import NotFound from './components/NotFound';
import Register from './components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/screen" exact component={Screen} />
          <Route path="/register" exact component={Register} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
