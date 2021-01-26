import React from 'react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

interface props {
  routes: {
    [key: string]: any;
  }[];
}

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.user.isAuthenticated,
  userLoading: state.user.userLoading,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & props;

const Home = (props: Props) => {
  const [showSidebar, setShowidebar] = React.useState(true);
  const toggleSidebar = () => setShowidebar(!showSidebar);
  return (
    <div className='h-full'>
      <Navbar
        isAuthenticated={props.isAuthenticated}
        toggleSidebar={toggleSidebar}
      />
      {showSidebar && (
        <Sidebar
          routes={props.routes}
          isAuthenticated={props.isAuthenticated}
        />
      )}
      <div className='flex justify-center'>
        <h1 className='py-20 font-bold text-2xl'>EbutOuy</h1>
      </div>
    </div>
  );
};

export default connector(Home);
