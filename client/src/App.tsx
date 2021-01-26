import { hot } from 'react-hot-loader';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import retry from './utils/retry';

const Home = React.lazy(() => retry(() => import('./routes/Home')));
const Authenticate = React.lazy(() =>
  retry(() => import('./routes/Authenticate'))
);
const About = React.lazy(() => retry(() => import('./routes/About')));
const Contact = React.lazy(() => retry(() => import('./routes/Contact')));
const NotFound = React.lazy(() => retry(() => import('./routes/NotFound')));

/**
  Home
  Trending
  Subscriptions
  library
  history
  
  Sign in
-----------
  Your videos
  your playlists
  liked videos

  settings
  help
  send feedback

*/

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/feed/trending', name: 'Trending', Component: Home }, //
  { path: '/feed/subscriptions', name: 'Subscriptions', Component: Home }, //
  { path: '/feed/library', name: 'Library', Component: Home }, //
  { path: '/feed/history', name: 'History', Component: Home }, //
  { path: '/settings', name: 'Settings', Component: Home }, //
  { path: '/help', name: 'Help', Component: Home }, //
  { path: '/feedback', name: 'Send feedback', Component: Home }, //
  { path: '/authenticate', name: 'Sign in', Component: Authenticate },
  { path: '/account/videos', name: 'Your videos', Component: Authenticate }, //
  { path: '/account/liked', name: 'liked videos', Component: Authenticate }, //
  { path: '/account/playlists', name: 'Playlists', Component: Authenticate }, //
];

const App = () => {
  return (
    <div className='min-h-screen min-w-screen bg-gray-100'>
      <React.Suspense fallback={<div></div>}>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <div>
                <Component routes={routes} />
              </div>
            </Route>
          ))}
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default hot(module)(App);
