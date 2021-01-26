import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../../reducers/index';

import { USER_BASE, API_SUFFIX, CSRFConfig } from '../utils/config';

// import helper functions
import { RegisterHelper, LoginHelper } from './functions';

/**
 * @desc Register a new user
 * @param body
 */
export const register = (body: UserInfoObj): UserThunk => async (
  dispatch: ThunkDispatch<RootState, void, Action>
) => {
  dispatch({ type: 'USER_LOADING ' });
  try {
    await RegisterHelper(body, USER_BASE + API_SUFFIX, CSRFConfig)
      .then((response) => {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: response,
        });
      })
      .catch((err: Error) => {
        throw err;
      });
  } catch (err) {
    // add error handling state
    dispatch({
      type: 'REGISTER_FAILED',
    });
  }
};

/**
 * @desc Login an existing user
 * @param body
 */
export const login = (body: UserLoginInfoObj): UserThunk => async (
  dispatch: ThunkDispatch<RootState, void, Action>
) => {
  dispatch({ type: 'USER_LOADING' });
  try {
    await LoginHelper(body, USER_BASE + API_SUFFIX, CSRFConfig)
      .then((response) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response,
        });
      })
      .catch((err) => {
        throw err;
      });
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAILED',
    });
  }
};

/**
 * @desc set loading to true while actions are running
 */
export function setUserLoading(): UserActionTypes {
  return {
    type: 'USER_LOADING',
  };
}
