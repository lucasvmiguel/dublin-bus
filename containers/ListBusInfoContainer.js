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
        <ListBusInfo busesInfo={this.props.busesInfo} />
      </View>
    );
  }
};

const mapStateToProps = (state) => ({ 
  busesInfo: state.busesInfo.busesInfo 
});

const mapDispatchToProps = (dispatch) => ({
  fetchBusesInfoByStopNumber: (stopNumber) => dispatch(fetchBusesByStopNumber(stopNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBusInfoContainer);