const initState = {
  isLoading: false,
  appError: null as string | null,
};

export const appReducer = (state = initState, action: ActionType): AppInitStateType => {
  switch (action.type) {
    case 'SET-LOADING':
      return { ...state, ...action.payload };
    case 'SET-ERROR':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setError = (appError: string | null) =>
  ({ type: 'SET-ERROR', payload: { appError } } as const);
export const setLoading = (isLoading: boolean) =>
  ({ type: 'SET-LOADING', payload: { isLoading } } as const);

export type AppInitStateType = typeof initState;
type ActionType = ReturnType<typeof setLoading> | ReturnType<typeof setError>;
