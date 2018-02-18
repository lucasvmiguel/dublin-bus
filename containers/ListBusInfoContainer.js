import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { fetchBusesByStopNumber } from '../actions/busesInfo'

import StopNumberForm from '../components/StopNumberForm';
import ListBusInfo from '../components/ListBusInfo';

var width = Dimensions.get('window').width;

class ListBusInfoContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, margin: 20, width }}>
        <StopNumberForm fetchBusesInfoByStopNumber={this.props.fetchBusesInfoByStopNumber} />
        <ListBusInfo 
          isLoading={this.props.isLoading} 
          busesInfo={this.props.busesInfo} 
          error={this.props.error}
          busStopNumber={this.props.busStopNumber} />
      </View>
    );
  }
};

const mapStateToProps = (state) => ({ 
  busesInfo: state.busesInfo.busesInfo,
  isLoading: state.busesInfo.isLoading,
  error: state.busesInfo.error,
  busStopNumber: state.busesInfo.busStopNumber
});

const mapDispatchToProps = (dispatch) => ({
  fetchBusesInfoByStopNumber: (stopNumber) => dispatch(fetchBusesByStopNumber(stopNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBusInfoContainer);