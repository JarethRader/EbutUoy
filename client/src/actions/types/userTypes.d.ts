import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  USER_LOADED,
  AUTH_ERROR,
} from './types';

declare global {
  interface IUserModel {
    id?: string;
    username?: string;
    email?: string;
    dob?: string;
  }

  interface IUserState {
    userInfo?: IUserModel;
    isAuthenticated?: boolean;
    isVerified?: boolean;
    matureContent?: boolean;
    userLoading?: boolean;
  }

  interface LoadingUserAction {
    type: typeof USER_LOADING;
    payload?: null;
  }

  // Login action interface
  interface LoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: AuthenticationResponse;
  }
  interface LoginFail {
    type: typeof LOGIN_FAILED;
    payload?: null;
  }

  // Login action type
  type LoginActionTypes = LoginSuccess | LoginFail;

  interface UserInfoObj {
    username: string;
    email: string;
    password: string;
    dob: string;
  }

  interface UserLoginInfoObj {
    email: string;
    password: string;
  }

  interface AuthenticationResponse {
    user: {
      id: string;
      username: string;
      email: string;
      dob: string;
      matureContent: boolean;
      verified: boolean;
    };
  }

  // Register success interface
  interface RegisterSuccess {
    type: typeof REGISTER_SUCCESS;
    payload: AuthenticationResponse;
  }
  // Register failed interface
  interface RegisterFail {
    type: typeof REGISTER_FAILED;
    payload?: null;
  }
  // Register action type
  export type RegisterActionTypes = RegisterSuccess | RegisterFail;

  interface AuthFailed {
    type: typeof AUTH_ERROR;
    payload?: any;
  }

  interface AuthSuccess {
    type: typeof USER_LOADED;
    payload?: IUserModel;
  }

  type AuthActionTypes = AuthFailed | AuthSuccess;

  type UserActionTypes =
    | LoginActionTypes
    | LoadingUserAction
    | RegisterActionTypes
    | AuthActionTypes;
}
