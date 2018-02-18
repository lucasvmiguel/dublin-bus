const initialState = {
  busStopNumber: null,
  busesInfo: [],
  isLoading: false,
  error: null
}

export default function busesInfoReducer(state = initialState, action) {
  console.log('busesInfoReducer', 'state', state);
  console.log('busesInfoReducer', 'action', action);

  switch(action.type) {
    case 'FETCH_BUSES_INFO_BY_STOP_NUMBER_REQUEST':
      return {...state, isLoading: true, busesInfo: [], busStopNumber: action.busStopNumber };
    case 'FETCH_BUSES_INFO_BY_STOP_NUMBER_SUCCESS':
      return {...state, isLoading: false, busesInfo: action.response.results };
    case 'FETCH_BUSES_INFO_BY_STOP_NUMBER_FAILED':
      return {...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}