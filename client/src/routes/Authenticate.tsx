import React from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../reducers/index';
import { register, login } from '../actions/UserAPI/userActions';

import { Redirect } from 'react-router-dom';

// import forms
import RegisterForm from './Authentication/register';
import LoginForm from './Authentication/login';

export interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.user.isAuthenticated,
  userLoading: state.user.userLoading,
});

const mapDispatchToProps = {
  register,
  login,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const Authenticate: React.FC<Props> = (props: Props) => {
  const [loggingIn, setLoggingIn] = React.useState(true);
  const toggleLogginIn = () => setLoggingIn(!loggingIn);

  return (
    <div className='min-h-screen flex self-center justify-center items-center'>
      {loggingIn ? (
        <LoginForm login={props.login} toggleLogginIn={toggleLogginIn} />
      ) : (
        <RegisterForm
          register={props.register}
          toggleLogginIn={toggleLogginIn}
        />
      )}
      {props.isAuthenticated && <Redirect to='/' />}
    </div>
  );
};

export default connector(Authenticate);
