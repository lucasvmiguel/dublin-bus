import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const styles = StyleSheet.create({
});

const ListBusInfo = props => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      { !props.isLoading && props.busesInfo.length > 0 && 
        <Text>Buses coming to bus stop { props.busStopNumber }</Text>}
      { !props.isLoading && 
        <List>
          {
            props.busesInfo.map((b, i) => (
              <ListItem
                key={i}
                leftIcon={{name: 'directions-bus'}}
                title={`Route ${b.route}`}
                subtitle={b.duetime == "due" ? "due" : `${b.duetime} min`}
                hideChevron
              />
            ))
          }
        </List>}
      { props.isLoading && <Text>Loading...</Text>}
      { props.error && <Text>Try again!</Text>}
    </View>
  );
}

export default ListBusInfo;

