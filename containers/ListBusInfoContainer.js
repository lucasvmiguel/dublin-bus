import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ListBusInfo from '../components/ListBusInfo';

class ListBusInfoContainer extends Component {
  render() {
    return (
      <View>
        <ListBusInfo busesInfo={this.props.busesInfo} />
      </View>
    );
  }
};

// start of code change
const mapStateToProps = (state) => ({ 
  busesInfo: state.busesInfo 
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps)(ListBusInfoContainer);