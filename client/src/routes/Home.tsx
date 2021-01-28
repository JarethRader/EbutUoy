import React from 'react';

import Sidebar from '../components/sidebar';

interface props {
  routes: {
    [key: string]: any;
  }[];
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

const Home = (props: ConnectedProps<typeof connector> & props) => {
  const [showSidebar, setShowidebar] = React.useState(false);
  const toggleSidebar = () => setShowidebar(!showSidebar);
  return (
    <div className='h-full'>
      <props.Navbar
        isAuthenticated={props.isAuthenticated}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar routes={props.routes} isAuthenticated={props.isAuthenticated} />

      <div className='flex justify-center'>
        <h1 className='py-20 font-bold text-2xl'>EbutOuy</h1>
      </div>
    </div>
  );
};

export default connector(Home);
