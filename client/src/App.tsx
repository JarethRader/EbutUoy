import { hot } from 'react-hot-loader';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import retry from './utils/retry';

import Navbar from './components/navbar';

const Home = React.lazy(() => retry(() => import('./routes/Home')));
const Authenticate = React.lazy(() =>
  retry(() => import('./routes/Authenticate'))
);

const About = React.lazy(() => retry(() => import('./routes/About')));
const Settings = React.lazy(() => retry(() => import('./routes/Settings')));

const NotFound = React.lazy(() => retry(() => import('./routes/NotFound')));

const routes = [
  { path: '/account/playlists', name: 'Playlists', Component: Authenticate }, //
  { path: '/account/liked', name: 'liked videos', Component: Authenticate }, //
  { path: '/account/videos', name: 'Your videos', Component: Authenticate }, //
  { path: '/authenticate', name: 'Sign in', Component: Authenticate },
  { path: '/feedback', name: 'Send feedback', Component: Home }, //
  { path: '/help', name: 'Help', Component: Home }, //
  { path: '/settings', name: 'Settings', Component: Settings },
  { path: '/feed/history', name: 'History', Component: Home }, //
  { path: '/feed/library', name: 'Library', Component: Home }, //
  { path: '/feed/subscriptions', name: 'Subscriptions', Component: Home }, //
  { path: '/feed/trending', name: 'Trending', Component: Home }, //
  { path: '/', name: 'Home', Component: Home },
];

const App = () => {
  return (
    <div className='min-h-screen min-w-screen bg-gray-100'>
      <React.Suspense fallback={<div></div>}>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path}>
              <div>
                <Component routes={routes} Navbar={Navbar} />
              </div>
            </Route>
          ))}
          {/* <Route path='*'>
            <NotFound />
          </Route> */}
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default hot(module)(App);
