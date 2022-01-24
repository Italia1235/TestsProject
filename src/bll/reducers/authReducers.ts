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
      return { ...state, isLoggedIn: action.isLoggedIn, email: action.email };
    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof setIsLoggedInAC>;

export const setIsLoggedInAC = (isLoggedIn: boolean, email: string, password: string) =>
  ({ type: 'login/SET-IS-LOGGED-IN', isLoggedIn, email, password } as const);

type InitialStateType = {
  isLoggedIn: boolean;
  email: string;
  password: string;
  error: null | string;
  userId: string | null;
};
