import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useParams,
} from 'react-router-dom';

import SettingsNav from './Account/settingsNav';

import AccountInfo from './Account/routes/accountInfo';

const settingsRoutes = [
  {
    path: '/account',
    name: 'Account',
    component: AccountInfo,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    AccountInfo: AccountInfo,
  },
  { path: '/privacy', name: 'Privacy', AccountInfo: AccountInfo },
];

interface props {
  Navbar: (props: any) => JSX.Element;
}

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.user.isAuthenticated,
  userLoading: state.user.userLoading,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

const Settings = (props: ConnectedProps<typeof connector> & props) => {
  const [showSidebar, setShowidebar] = React.useState(true);
  const toggleSidebar = () => setShowidebar(!showSidebar);

  const { path, url } = useRouteMatch();
  console.log(`${path}/accounts`);
  return (
    <div className='min-h-screen'>
      <props.Navbar
        isAuthenticated={props.isAuthenticated}
        toggleSidebar={toggleSidebar}
      />
      {showSidebar && <SettingsNav routes={settingsRoutes} url={url} />}
      <div className='flex justify-center'>
        <h1 className='py-20 font-bold text-2xl'>Settings</h1>
        <Switch>
          <Route path={`${path}/:topicId`}>
            <Options />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const Options = () => {
  // @ts-ignore
  const { topicId } = useParams();
  return <div>{topicId}</div>;
};

export default connector(Settings);
