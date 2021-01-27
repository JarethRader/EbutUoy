import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  USER_LOADED,
  AUTH_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
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
    payload: UserResponse;
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

  interface UpdateUserInfoObj {
    username?: string;
    email?: string;
    password?: string;
    dob?: string;
    matureContent?: boolean;
    verified?: boolean;
  }

  interface UserResponse {
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
    payload: UserResponse;
  }
  // Register failed interface
  interface RegisterFail {
    type: typeof REGISTER_FAILED;
    payload?: null;
  }
  // Register action type
  type RegisterActionTypes = RegisterSuccess | RegisterFail;

  interface AuthFailed {
    type: typeof AUTH_ERROR;
    payload?: any;
  }

  interface AuthSuccess {
    type: typeof USER_LOADED;
    payload?: IUserModel;
  }

  type AuthActionTypes = AuthFailed | AuthSuccess;

  interface UpdateSuccess {
    type: typeof UPDATE_USER_SUCCESS;
    payload: UserResponse;
  }

  interface UpdateFailed {
    type: typeof UPDATE_USER_FAILED;
    payload?: null;
  }

  type UpdateActionType = UpdateSuccess | UpdateFailed;

  type UserActionTypes =
    | LoginActionTypes
    | LoadingUserAction
    | RegisterActionTypes
    | AuthActionTypes
    | UpdateActionType;
}
