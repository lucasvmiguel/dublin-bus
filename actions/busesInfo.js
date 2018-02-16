export function fetchBusesByStopNumber(busStopNumber) {
  return (dispatch, getState) => {
    dispatch({type : "FETCH_BUSES_INFO_BY_STOP_NUMBER_REQUEST", busStopNumber: busStopNumber});
    
    fetch(`https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopId=${busStopNumber}`)
      .then(response => response.json())
      .then(body => dispatch({type : "FETCH_BUSES_INFO_BY_STOP_NUMBER_SUCCESS", response : body}))
      .catch(error => dispatch({type : "FETCH_BUSES_INFO_BY_STOP_NUMBER_FAILED", error : error}));
  }
}