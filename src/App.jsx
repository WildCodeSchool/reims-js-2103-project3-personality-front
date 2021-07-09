import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Home from './components/Home';
import Screen from './components/Screen';
import NotFound from './components/NotFound';
import Register from './components/Register';
import ScreenContext from './contexts/ScreenContext';
import { LoginDataProvider } from './contexts/LoginDataContext';
import Login from './components/Login';

import './Particles.css';

function App() {
  const [play, setPlay] = React.useState(false);

  return (
    <LoginDataProvider>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 50,
          particles: {
            number: {
              value: 0,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#6227b5',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: false,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
                sync: false,
              },
            },
            size: {
              value: 8,
              random: { enable: true, minimumValue: 4 },
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 4,
                sync: false,
              },
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: -0.3,
              },
              speed: 1,
              direction: 'top',
              random: false,
              straight: false,
              outModes: {
                default: 'destroy',
                bottom: 'none',
              },
              attract: {
                enable: true,
                distance: 1,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
            },
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true,
            },
          },
          detectRetina: true,
          background: {
            color: '#ffffff',
          },
          emitters: [
            {
              direction: 'top',
              particles: {
                color: '#6227b5',
              },
              rate: {
                quantity: 0.1,
                delay: 0.5,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
            {
              direction: 'top',
              particles: {
                color: '#d43995',
              },
              rate: {
                quantity: 0.1,
                delay: 0.5,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            }, {
              direction: 'top',
              particles: {
                color: '#449c95',
              },
              rate: {
                quantity: 0.1,
                delay: 0.5,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
            {
              direction: 'top',
              particles: {
                color: '#fcda55',
              },
              rate: {
                quantity: 0.1,
                delay: 0.5,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
          ],
        }}
      />
      <ScreenContext.Provider value={{ play, setPlay }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/screen/:id" exact component={Screen} />
            <Route path="/register" exact component={Register} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ScreenContext.Provider>
    </LoginDataProvider>
  );
}

export default App;
