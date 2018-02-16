const initialState = {
  busStopNumber: null,
  busesInfo: [],
  isLoading: false
}

export default function busesInfoReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BUSES_INFO_BY_STOP_NUMBER':
      return {...state, isLoading: true, busesInfo: [], busStopNumber: action.busStopNumber };
    default:
      return state;
  }
}