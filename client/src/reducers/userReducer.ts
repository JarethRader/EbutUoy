const initialState: IUserState = {
  userInfo: {},
  isAuthenticated: false,
  isVerified: false,
  matureContent: false,
  userLoading: false,
};

export default function (
  state = initialState,
  action: UserActionTypes
): IUserState {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        userInfo: {
          id: action.payload.user.id,
          username: action.payload.user.username,
          email: action.payload.user.email,
          dob: action.payload.user.dob,
        },
        isAuthenticated: true,
        isVerified: action.payload.user.verified,
        matureContent: action.payload.user.matureContent,
        userLoading: false,
      };
    case 'GET_SELF_SUCCESS':
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        userInfo: {
          id: action.payload.user.id,
          username: action.payload.user.username,
          email: action.payload.user.email,
          dob: action.payload.user.dob,
        },
        isVerified: action.payload.user.verified,
        matureContent: action.payload.user.matureContent,
        userLoading: false,
      };
    case 'LOGOUT_SUCCESS':
    case 'DELETE_USER_SUCCESS':
    case 'LOGIN_FAILED':
    case 'REGISTER_FAILED':
      return {
        ...state,
        userInfo: {},
        isAuthenticated: false,
        isVerified: false,
        matureContent: false,
        userLoading: false,
      };
    case 'LOGOUT_FAILED':
    case 'DELETE_USER_FAILED':
    case 'GET_SELF_FAILED':
    case 'UPDATE_USER_FAILED':
      return {
        ...state,
        userLoading: false,
      };
    case 'USER_LOADING':
      return {
        ...state,
        userLoading: true,
      };
    default:
      return state;
  }
}
