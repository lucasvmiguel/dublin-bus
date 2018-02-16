export function fetchBusesByStopNumber(busStopNumber) {
  return {
    type: 'FETCH_BUSES_INFO_BY_STOP_NUMBER',
    busStopNumber: busStopNumber
  }
}