import React, { Component } from 'react';
import { View, TextInput, Button, Keyboard } from 'react-native';

export default class StopNumberForm extends Component {
  constructor(props) {
    super(props);
    this.state = { stopNumber: '' };
  }

  render() {
    return (
      <View style={{ height: 30 }}>
        <TextInput
          onChangeText={(stopNumber) => this.setState({ stopNumber })}
          keyboardType="numeric"
          value={this.state.stopNumber}/>
        <Button
          onPress={(e) => {
            Keyboard.dismiss();
            this.props.fetchBusesInfoByStopNumber(this.state.stopNumber);
          }}
          title="Search"/>
      </View>
    );
  }
}