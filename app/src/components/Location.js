import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LocationMap from '../icons/map.svg';
const Location = props => {
  return (
    <View style={styles.container}>
      <LocationMap width={18} height={18} />
      <Text style={styles.text}>{props.ubication}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  text: {
    paddingLeft: 5,
    fontSize: 15,
    color: 'grey',
  },
});

export default Location;
