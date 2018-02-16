import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';

import store from './store/store';
import ListBusInfoContainer from './containers/ListBusInfoContainer';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ListBusInfoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width,
    height
  },
});
