import { Dispatch } from 'redux';

import { authAPI } from '../../dal/api';
import { Nullable } from '../../types/Nullable';

import { setError } from './appReducers';

const initialState: InitialStateType = {
  isLoggedIn: false,
  email: '',
  password: '',
  error: null,
  userId: null,
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof setIsLoggedInAC>;

export const setIsLoggedInAC = (isLoggedIn: boolean, name: string) =>
  ({ type: 'login/SET-IS-LOGGED-IN', isLoggedIn, name } as const);

type InitialStateType = {
  isLoggedIn: boolean;
  email: string;
  password: string;
  error: Nullable<string>;
  userId: Nullable<string>;
  rememberMe?: boolean;
};

export type LoginPageType = {
  email: string;
  password: string;
  error?: Nullable<string>;
  rememberMe: boolean;
};

export const LoginThunkCreator = (data: LoginPageType) => (dispatch: Dispatch) => {
  authAPI
    .login(data)
    .then(res => {
      dispatch(setIsLoggedInAC(true, res.data.name));
    })
    .catch(err => dispatch(setError(err.response.data.error)));
};
