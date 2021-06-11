import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Screen from './components/Screen';
import NotFound from './components/NotFound';
import Register from './components/Register';
import ScreenContext from './contexts/ScreenContext';

function App() {
  const [play, setPlay] = React.useState(false);
  return (
    <>
      <ScreenContext.Provider value={{ play, setPlay }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/screen" exact component={Screen} />
            <Route path="/register" exact component={Register} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ScreenContext.Provider>
    </>
  );
}

export default App;
