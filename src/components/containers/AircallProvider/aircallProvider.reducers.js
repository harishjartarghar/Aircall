export const DEFAULT_INITIAL_STATE = {
  isLoading: false,
  isFetching: false,
  isSuccess: false,
  isError: false,
  isComplete: false,
  isInitialized: false,
  error: null,
  status: '',
  data: null
};

export const REDUCER_TYPES = {
  FETCH_AIR_CALL: 'FETCH_AIR_CALL',
  SET_AIR_CALL: 'SET_AIR_CALL',
  FETCH_AIR_CALL_ERROR: 'FETCH_AIR_CALL_ERROR',
  RESET_AIR_CALL: 'RESET_AIR_CALL',
  TOGGLE_ARCHIVE_STATUS: 'TOGGLE_ARCHIVE_STATUS',

  FETCH_DETAILS: 'FETCH_DETAILS',
  RESET_DETAILS: 'RESET_DETAILS',
  SET_DETAILS: 'SET_DETAILS'
};

const reducer = (state, action) => {
  switch (action.type) {
    case REDUCER_TYPES.FETCH_AIR_CALL:
      return {
        ...state,
        isLoading: true,
        isFetching: true
      };

    case REDUCER_TYPES.SET_AIR_CALL:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isFetching: false,
        isComplete: true,
        isInitialized: true,
        isSuccess: true
      };

    case REDUCER_TYPES.FETCH_AIR_CALL_ERROR:
      return {
        ...state,
        data: [],
        isLoading: false,
        isFetching: false,
        isComplete: true,
        isInitialized: true,
        isError: true
      };

    case REDUCER_TYPES.TOGGLE_WISHLIST_STATUS:
      return state;

    case REDUCER_TYPES.FETCH_DETAILS:
      return { ...state, selectedId: action.payload };

    case REDUCER_TYPES.RESET_DETAILS:
      return { ...state, selectedId: null };

    case REDUCER_TYPES.SET_DETAILS:
      return { ...state, details: action.payload };

    default:
      return state;
  }
};

export default reducer;
