const initialState = {
  busStopNumber: null,
  busesInfo: [],
  isLoading: false,
  error: null
}

export default function busesInfoReducer(state = initialState, action) {
  console.log('state', state);
  console.log('action', action);

  switch(action.type) {
    case 'FETCH_BUSES_INFO_BY_STOP_NUMBER_REQUEST':
      return {...state, isLoading: true, busesInfo: [], busStopNumber: action.busStopNumber };
    case 'FETCH_BUSES_INFO_BY_STOP_NUMBER_SUCCESS':
      console.log('responsseeeee', action.response)
      return {...state, isLoading: false, busesInfo: action.response.results };
    case 'FETCH_BUSES_INFO_BY_STOP_NUMBER_FAILED':
      return {...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}