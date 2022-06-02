import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Bed from '../icons/bed.svg';
import Environments from '../icons/environments.svg';
import Meters from '../icons/meters.svg';

const Details = ({environments, bath, meters}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Bed width={25} height={25} />
        <Text style={styles.text}>{environments}</Text>
      </View>
      <View style={styles.item}>
        <Environments backgroundColor="red" width={20} height={20} />
        <Text style={styles.text}>{bath}</Text>
      </View>
      <View style={styles.item}>
        <Meters width={25} height={25} />
        <Text style={styles.text}>{meters}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    //backgroundColor: 'yellow',
  },
  item: {
    flexDirection: 'row',
    //backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'black',
  },
});

export default Details;
