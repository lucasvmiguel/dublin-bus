import React from 'react';
import { List, ListItem } from 'react-native-elements'

const ListBusInfo = props => {
  console.log('props', props)
  return (
    <List style={{ flex: 1, marginTop: 30 }}>
      {
        props.busesInfo.map((b, i) => (
          <ListItem
            key={i}
            leftIcon={{name: 'bus'}}
            title={`Route ${b.route}`}
            subtitle={b.duetime == "due" ? "due" : `${b.duetime} min`}
            hideChevron
          />
        ))
      }
    </List>
  );
}

export default ListBusInfo;