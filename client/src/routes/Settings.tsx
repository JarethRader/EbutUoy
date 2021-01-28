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
  const [showSidebar, setShowidebar] = React.useState(false);
  const toggleSidebar = () => setShowidebar(!showSidebar);

  const { path, url } = useRouteMatch();
  // if (!props.isAuthenticated) {
  //   return <Redirect to='/authenticate' />;
  // } else {
  return (
    <div className='min-h-screen'>
      <props.Navbar
        isAuthenticated={props.isAuthenticated}
        toggleSidebar={toggleSidebar}
      />
      {showSidebar && <SettingsNav routes={settingsRoutes} url={url} />}
      <div className='flex justify-center'>
        <Switch>
          <Route path={`${path}/:settingsId`}>
            <div className='w-full md:mx-wtwenty mx-wfive mt-hten'>
              <Options />
            </div>
          </Route>
          <Route path={`${path}`}>
            <Redirect to={`${path}/account`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
  // }
};

const Options = () => {
  // @ts-ignore
  const { settingsId } = useParams();
  switch (settingsId) {
    case 'account':
      return <AccountInfo />;
    default:
      return <AccountInfo />;
  }
};

export default connector(Settings);
